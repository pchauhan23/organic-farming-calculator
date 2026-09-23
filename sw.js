/* Service worker: keeps a copy of the app so it works with no signal.
   It answers from the saved copy first and refreshes it in the background,
   so an updated index.html reaches people the next time they open the app.
   Change VERSION when you upload a new version to be sure everyone updates. */
const VERSION = 'ofc-v3';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png',
  'lang/es.js', 'lang/pt.js', 'lang/fr.js', 'lang/de.js', 'lang/nl.js', 'lang/ru.js', 'lang/zh.js', 'lang/ko.js', 'lang/ja.js', 'lang/id.js', 'lang/vi.js', 'lang/th.js'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.open(VERSION).then(cache =>
      cache.match(req, { ignoreSearch: true }).then(saved => {
        const fresh = fetch(req)
          .then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; })
          .catch(() => saved || (req.mode === 'navigate' ? cache.match('index.html') : undefined));
        return saved || fresh;
      })
    )
  );
});
