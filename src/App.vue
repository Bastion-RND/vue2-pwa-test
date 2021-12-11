<template>
  <div id="app">
    fcmToken: {{fcmToken}}
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    fcmToken: null,
  }),

  methods: {
    setFcmToken() {
      this.fcmToken = localStorage.getItem('fcmToken');
    },
  },

  mounted() {
    setTimeout(this.setFcmToken, 3000);
  },
};
</script>
