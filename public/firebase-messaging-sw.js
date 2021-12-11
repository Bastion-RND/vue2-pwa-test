/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-arrow-callback */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const CACHE_NAME = 'index';
const OFFLINE_URL = 'index.html';
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBNv1w9uWVOwpw85FVpzmOS-6CAOiTLPww',
  authDomain: 'teplocom-mwp.firebaseapp.com',
  projectId: 'teplocom-mwp',
  storageBucket: 'teplocom-mwp.appspot.com',
  messagingSenderId: '576607814456',
  appId: '1:576607814456:web:0cb0d62882b73e29f837cd',
  measurementId: 'G-DF9SZR14ME',
  vapidKey: 'BMIQjw6WSG2sa5PjKRPQKACxgeEo_ci1_A8-4fdzUWmK5RwNwPOpRuWjlTGrqbUR1_Nh19oZZzujB-fSm0QkN1o',
};

firebase.initializeApp(FIREBASE_CONFIG);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'img/icons/192x192.png',
    bage: 'img/icons/96x96.png',
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Install');

  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Setting {cache: 'reload'} in the new request will ensure that the response
    // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
    await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
  })());

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  // console.log('[Service Worker] Fetch', event.request.url);
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        console.log('[Service Worker] Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL);
        return cachedResponse;
      }
    })());
  }
});
/* eslint-enable no-undef */
/* eslint-enable no-restricted-globals */
/* eslint-enable prefer-arrow-callback */
