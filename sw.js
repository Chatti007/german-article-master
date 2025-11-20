// sw.js - Service Worker بسيط
const CACHE_NAME = 'german-master-v1';
const urlsToCache = [
  '/german-article-master/',
  '/german-article-master/index.html',
  '/german-article-master/manifest.json',
  '/german-article-master/AppImages/Android/android192-192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
