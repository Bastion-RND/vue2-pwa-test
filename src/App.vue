<template>
  <div id="app">
    Тест
  </div>
</template>

<script>
const INDEXED_DB = {
  name: 'teplocom',
  storeName: 'push',
  description: 'Хранилище PUSH настроек',
};

export default {
  name: 'App',
  async mounted() {
    const store = await this.$vlf.createInstance(INDEXED_DB);

    const userPhone = store.getItem('userPhone');

    if (!userPhone) store.setItem('userPhone', '+7987654321');
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
