/**
 * 在 index.html 中最小化和使用 ejs 模板语法的插件。
 * https://github.com/anncwb/vite-plugin-html
 */
import { createHtmlPlugin } from 'vite-plugin-html';
import pkg from '../../package.json';
import { GLOB_CONFIG_FILE_NAME } from '../constant';
import { HtmlTagDescriptor } from 'vite';
import postInit from '../scripts/postInit';

export function configHtmlPlugin(env: ImportMetaEnv, isBuild: boolean) {
  const { SKOTE_GLOB_APP_TITLE, SKOTE_PUBLIC_PATH } = env;

  const path = SKOTE_PUBLIC_PATH.endsWith('/') ? SKOTE_PUBLIC_PATH : `${SKOTE_PUBLIC_PATH}/`;

  const getAppConfigSrc = () => {
    return `${path || '/'}${GLOB_CONFIG_FILE_NAME}?v=${pkg.version}-${new Date().getTime()}`;
  };

  const injectTags: HtmlTagDescriptor[] = [];

  if (isBuild) {
    injectTags.push({ tag: 'script', attrs: { src: getAppConfigSrc() } });
  }

  const data = postInit(SKOTE_GLOB_APP_TITLE, pkg.version);

  injectTags.push({
    tag: 'script',
    attrs: { id: 'project-init-version',type:"text/javascript" },
    children: data,
  });

  return createHtmlPlugin({
    minify: isBuild,
    template: 'build/index.html',
    inject: {
      // 将数据注入ejs模板
      data: {
        title: SKOTE_GLOB_APP_TITLE,
      },
      // 嵌入生成的 app.config.js 文件
      tags: injectTags,
    },
  });
}
