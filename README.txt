Organic Farming Calculator
==========================

Files in this folder (upload them all together):
  index.html            the app (all recipes and both languages are inside)
  manifest.webmanifest  makes "Add to Home Screen" work like an app
  sw.js                 lets the app work offline after the first visit
  icon-192.png, icon-512.png, apple-touch-icon.png   the app icon

To publish for free:
  1. Go to app.netlify.com/drop
  2. Drag this whole folder (or the zip file) onto the page.
  3. Share the link it gives you.

Notes:
  - Offline use and the install prompt only work on the published https link,
    not when you double-click index.html on your computer.
  - To turn on the "Email feedback" button, open index.html in a text editor and
    put your email in the line:  const FEEDBACK_EMAIL = '';
  - When you upload a new version, change VERSION in sw.js (for example to 'ofc-v2')
    so phones pick up the update.
