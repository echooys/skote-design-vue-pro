import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import { resolve } from 'path';
import dayjs from 'dayjs';
import pkg from './package.json';
import { wrapperEnv } from './build/utils';
import createVitePlugins from './build/plugins';
import { ENV_DIR, ENV_PREFIX, OUTPUT_DIR } from './build/constant';
import { createProxy } from './build/proxy';

const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir);

const getAppInfo = () => {
  const { dependencies, devDependencies, name, version } = pkg;
  return {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  };
};

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const envDir = pathResolve(ENV_DIR);
  const env = loadEnv(mode, envDir, ENV_PREFIX);
  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;
  const isBuild = command === 'build';
  return {
    base: VITE_PUBLIC_PATH,
    root,
    envDir,
    envPrefix: ENV_PREFIX,
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /\/#\//,
          replacement: pathResolve('typings') + '/',
        },
      ],
    },
    server: {
      https: true,
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: OUTPUT_DIR,
      minify: 'esbuild',
      // 关闭 brotliSize 显示可以稍微减少打包时间
      brotliSize: false,
      chunkSizeWarningLimit: 500,
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(getAppInfo()),
    },

    css: {
      preprocessorOptions: {
        less: {
          modifyVars:{
            // hack: `true; @import (reference) "ant-design-vue/lib/style/themes/default.less";`,
          },
          javascriptEnabled: true,
        },
      },
    },

    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
    plugins: createVitePlugins(viteEnv, isBuild),

    optimizeDeps: {
      include: ['ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US'],
      exclude: ['@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'],
    },
  };
};
