module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/firebase-messaging-sw.js',
    },
    iconPaths: {
      favicon32: './img/icons/32x32.png',
      favicon16: null,
      appleTouchIcon: './img/icons/192x192.png',
      maskIcon: null,
      msTileImage: './img/icons/144x144.png',
    },
    manifestPath: 'manifest.json',

    msTileColor: '#f68b1e',
    manifestOptions: {
      name: 'Bastion Vue PWA Workbox Firebase',
      short_name: 'Bastion Vue PWA',
      description: 'Bastion тестовая сборка Vue PWA Workbox Firebase',
      start_url: '/',
      orientation: 'any',
      display: 'standalone',
      theme_color: '#f68b1e',
      background_color: '#ffffff',
      icons: [
        {
          src: './img/icons/32x32.png',
          sizes: '32x32',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/48x48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/72x72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/96x96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/144x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: './img/icons/192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    name: 'Bastion Vue PWA Workbox Firebase',
    themeColor: '#f68b1e',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    assetsVersion: '1.0.5',
    start_url: '/',
    prefer_related_applications: true,
  },
};
