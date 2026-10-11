// Network-first service worker: always try the live site, fall back to the
// cache offline. Only this origin's GET requests are handled, only good
// responses are cached, and the index.html fallback is reserved for page
// navigations, so a missing language file fails honestly offline.
// release.sh fills in the cache name and the list of language files.
const CACHE = 'rootline-1128dc1';
const LANG = ['lang/cs.js','lang/de.js','lang/en.js','lang/es.js','lang/fr.js','lang/hr.js','lang/hu.js','lang/it.js','lang/nl.js','lang/pl.js','lang/pt.js','lang/ro.js','lang/sk.js','lang/sv.js','lang/uk.js'];
const ASSETS = ['.', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'lang/languages.js', ...LANG];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  let url;
  try { url = new URL(e.request.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => {
      if (r) return r;
      if (e.request.mode === 'navigate') return caches.match('index.html');
      return Response.error();
    }))
  );
});
