import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import WindiCSS from 'vite-plugin-windicss';
import { configHtmlPlugin } from './html';
import { configVisualizerConfig } from './visualizer';
import { configImageminPlugin } from './imagemin';
import { configCompressPlugin } from './compress';
import { configPwaConfig } from './pwa';
import { configSvgIconsPlugin } from './svgSprite';
import {configPluginComponent} from './pluginComponent';
import { configAutoImport } from './autoImport';
import { configTheme } from './theme';
import setupExtend from 'vite-plugin-vue-setup-extend'


/**
 * 创建 vite 不同环境的 plugins
 * @param viteEnv vite环境变量
 * @param isBuild 是否需要打包
 */
const createVitePlugins = (viteEnv: ImportMetaEnv, isBuild: boolean) => {
  const {
    SKOTE_USE_PWA,
    SKOTE_USE_IMAGEMIN,
    SKOTE_LEGACY,
    SKOTE_BUILD_COMPRESS,
    SKOTE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue({
      reactivityTransform: true
    }),
    setupExtend(),
    // have to
    vueJsx(),
  ];

  // vite-plugin-windicss
  vitePlugins.push(WindiCSS());


  vitePlugins.push(configPluginComponent())

  vitePlugins.push(configAutoImport())


  // @vitejs/plugin-legacy
  SKOTE_LEGACY && isBuild && vitePlugins.push(legacy());

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig());


  // The following plugins only work in the production environment
  if (isBuild) {
    // vite-plugin-imagemin
    SKOTE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());

    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(SKOTE_BUILD_COMPRESS, SKOTE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
    );

    // vite-plugin-pwa
    SKOTE_USE_PWA && vitePlugins.push(configPwaConfig(viteEnv));
  }

  vitePlugins.push(configTheme())
  return vitePlugins
};


export default createVitePlugins;
