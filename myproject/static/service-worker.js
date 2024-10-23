const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/static/icon-192x192.png',
  '/static/icon-512x512.png',
  '/static/manifest.json',
  '/static/styles.css',
  '/index.html'
];

self.addEventListener('install', event => {
  console.log('Service Worker: Install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Opened cache');
        return cache.addAll(urlsToCache)
          .then(() => {
            console.log('Service Worker: All resources cached');
          })
          .catch(error => {
            console.error('Service Worker: Failed to cache', error);
          });
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('Service Worker: Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Service Worker: Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Service Worker: Network request for ', event.request.url);
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
  );
});
