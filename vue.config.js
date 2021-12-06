module.exports = {
  pwa: {
    iconPaths: {
      favicon32: './img/icons/32x32.png',
      favicon16: null,
      appleTouchIcon: './img/icons/192x192.png',
      maskIcon: null,
      msTileImage: './img/icons/144x144.png',
    },
    manifestPath: 'manifest.json',

    msTileColor: '#4DBA87',
    manifestOptions: {
      name: 'Vue Test',
      short_name: 'Vue',
      start_url: '/',
      display: 'standalone',
      theme_color: '#123456',
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
    name: 'Vue Test',
    themeColor: '#4DBA87',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    assetsVersion: '1.0.0',
    start_url: '/',
    prefer_related_applications: true,
  },
};
