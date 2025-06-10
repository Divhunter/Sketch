const CACHE_NAME = 'sketchview-cache-v3';
const OFFLINE_URL = '/offline.html';

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');
  self.skipWaiting(); // Active immédiatement le nouveau SW

  event.waitUntil(
    fetch('/asset-manifest.json')
      .then((response) => response.json())
      .then((manifest) => {
        const filesToCache = [
          '/',
          '/index.html',
          OFFLINE_URL,
          manifest.files['main.js'],
          manifest.files['main.css'],

          // Polices
          'https://www.sketchview.fr/assets/fonts/Michroma-Regular.woff2',
          'https://www.sketchview.fr/assets/fonts/OpenSans-VariableFont_wdth,wght.woff2',
          'https://www.sketchview.fr/assets/fonts/Raleway-Light.woff2',
          'https://www.sketchview.fr/assets/fonts/Raleway-Medium.woff2',
          'https://www.sketchview.fr/assets/fonts/Raleway-Regular.woff2',
          'https://www.sketchview.fr/assets/fonts/Raleway-SemiBold.woff2',
          'https://www.sketchview.fr/assets/fonts/Roboto-ExtraBold.woff2',

          // Images
          'https://www.sketchview.fr/assets/pictures/contact1.png',
          'https://www.sketchview.fr/assets/pictures/contact2.png',
          'https://www.sketchview.fr/assets/pictures/contact3.png',
          'https://www.sketchview.fr/assets/pictures/Home1.png',
          'https://www.sketchview.fr/assets/pictures/Home2.png',
          'https://www.sketchview.fr/assets/pictures/Home3.png',
          'https://www.sketchview.fr/assets/pictures/projet1.png',
          'https://www.sketchview.fr/assets/pictures/projet2.png',
          'https://www.sketchview.fr/assets/pictures/projet3.png',
          'https://www.sketchview.fr/assets/pictures/plume.png',
          'https://www.sketchview.fr/assets/pictures/appel1.png',
          'https://www.sketchview.fr/assets/pictures/appel2.png',
          'https://www.sketchview.fr/assets/pictures/appel3.png',
          'https://www.sketchview.fr/assets/picturesmail1.png',
          'https://www.sketchview.fr/assets/pictures/mail2.png',
          'https://www.sketchview.fr/assets/pictures/mail3.png',

          // Logos & Bannières
          'https://www.sketchview.fr/assets/logos/sketchview-logo.png',
          'https://www.sketchview.fr/assets/logos/sketchview-logo-full.png',
          'https://www.sketchview.fr/assets/banners/dessin.jpg',
          'https://www.sketchview.fr/assets/banners/images.jpg',
          'https://www.sketchview.fr/assets/banners/PIC.jpg',
          'https://www.sketchview.fr/assets/banners/Video.jpg',
        ];

        return caches.open(CACHE_NAME).then((cache) => {
          console.log('[Service Worker] Caching static assets');
          return cache.addAll(filesToCache);
        });
      })
  );
});

// Activation et suppression des anciens caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Gestion des requêtes réseau
self.addEventListener('fetch', (event) => {
  const isDev = self.location.hostname === 'localhost';

  if (isDev) return; // Ignore le cache en dev

  const request = event.request;

  // Gestion spéciale des polices Google (optionnel si tu les héberges déjà)
  if (request.url.includes('fonts.googleapis.com') || request.url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        fetch(request).then((response) => {
          cache.put(request, response.clone());
          return response;
        }).catch(() => cache.match(request))
      )
    );
    return;
  }

  // Récupération depuis le cache d'abord, puis fallback réseau, puis fallback offline
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request)
        .then((response) => {
          // Ne pas mettre en cache les réponses incorrectes
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, response.clone());
            return response;
          });
        })
        .catch(() => caches.match(OFFLINE_URL));
    })
  );
});
