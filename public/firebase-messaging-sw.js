// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

/**
 * Firebase
 * Дублирует настройки в файле src/config/base.config.js
 */
const firebaseConfig = {
  apiKey: 'AIzaSyBNv1w9uWVOwpw85FVpzmOS-6CAOiTLPww',
  authDomain: 'teplocom-mwp.firebaseapp.com',
  projectId: 'teplocom-mwp',
  storageBucket: 'teplocom-mwp.appspot.com',
  messagingSenderId: '576607814456',
  appId: '1:576607814456:web:0cb0d62882b73e29f837cd',
  measurementId: 'G-DF9SZR14ME',
  vapidKey: 'BMIQjw6WSG2sa5PjKRPQKACxgeEo_ci1_A8-4fdzUWmK5RwNwPOpRuWjlTGrqbUR1_Nh19oZZzujB-fSm0QkN1o',
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
});
