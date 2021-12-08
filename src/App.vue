<template>
  <div id="app">
    Тест
  </div>
</template>

<script>
import firebase from 'firebase';

const INDEXED_DB = {
  name: 'teplocom',
  storeName: 'push',
  description: 'Хранилище PUSH настроек',
};

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

export default {
  name: 'App',

  data: () => ({
    messaging: null,
  }),

  async mounted() {
    const store = await this.$vlf.createInstance(INDEXED_DB);

    const userPhone = await store.getItem('userPhone');
    const fcmToken = await store.getItem('fcmToken');

    if (!userPhone) await store.setItem('userPhone', '+7987654321');

    if (!fcmToken) {
      // Подписка на Push сообщения
      try {
        await firebase.initializeApp(FIREBASE_CONFIG);
        this.messaging = firebase.messaging();
        const currentToken = await this.messaging.getToken({ vapidKey: FIREBASE_CONFIG.vapidKey });
        await store.setItem('fcmToken', currentToken);
      } catch (e) {
        console.log(e);
      }
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
