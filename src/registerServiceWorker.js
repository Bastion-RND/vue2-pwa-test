/* eslint-disable no-console */

import { register } from 'register-service-worker';
import firebase from 'firebase';

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

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}firebase-messaging-sw.js`, {
    async ready(registration) {
      console.log(
        'App is being served from cache by a service worker.\n'
        + 'For more details, visit https://goo.gl/AFskqB',
      );
      // Получение fcm токена для service worker
      try {
        await firebase.initializeApp(FIREBASE_CONFIG);
        const messaging = firebase.messaging();
        const fcmToken = await messaging.getToken({
          vapidKey: FIREBASE_CONFIG.vapidKey,
          serviceWorkerRegistration: registration,
        });
        console.log(fcmToken);
      } catch (e) {
        console.log(e);
      }
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
