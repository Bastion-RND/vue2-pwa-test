/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js');

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

const INDEXED_DB = {
  name: 'teplocom',
  storeName: 'push',
  description: 'Хранилище PUSH настроек',
};

const store = localforage.createInstance(INDEXED_DB);

firebase.initializeApp(FIREBASE_CONFIG);

const messaging = firebase.messaging();

messaging.getToken({ vapidKey: FIREBASE_CONFIG.vapidKey }).then((currentToken) => {
  if (currentToken) {
    store.setItem('fcmToken', currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/img/icons/144x144.png',
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
/* eslint-enable no-undef */
