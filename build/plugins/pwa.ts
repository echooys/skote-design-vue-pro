/**
 * Vite 的 PWA 配置
 * https://github.com/antfu/vite-plugin-pwa
 */
import { VitePWA } from 'vite-plugin-pwa';

export function configPwaConfig(env: ImportMetaEnv) {
  const { SKOTE_GLOB_APP_TITLE, SKOTE_GLOB_APP_SHORT_NAME } = env;

  return VitePWA({
    manifest: {
      name: SKOTE_GLOB_APP_TITLE,
      short_name: SKOTE_GLOB_APP_SHORT_NAME,
      icons: [
        {
          src: './resource/img/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './resource/img/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  });
}
