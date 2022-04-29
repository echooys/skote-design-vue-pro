import themePreprocessorPlugin from '@zougt/vite-plugin-theme-preprocessor';
import { resolve } from 'path';


export function configTheme() {

  return themePreprocessorPlugin({
    less: {
      // 是否启用任意主题色模式，这里不启用
      arbitraryMode: false,
      // 提供多组变量文件
      multipleScopeVars: [
        {
          scopeName: 'theme-default',
          path: resolve('src/design/theme/theme-default.less'),
        },
        {
          scopeName: 'theme-default-dark',
          path: resolve('src/design/theme/theme-default-dark.less'),
        },
        {
          scopeName: 'theme-skote',
          path: resolve('src/design/theme/theme-skote.less'),
        },
        {
          scopeName: 'theme-skote-dark',
          path: resolve('src/design/theme/theme-skote-dark.less'),
        },
      ],
      // css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
      includeStyleWithColors: [
        {
          color: '#ffffff',
        },
        {
          color: ["transparent", "none"],
        }
      ],
      // 默认取 multipleScopeVars[0].scopeName
      defaultScopeName: 'theme-default',
      // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
      extract: true,
      // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
      outputDir: 'theme',
      // 会选取defaultScopeName对应的主题css文件在html添加link
      themeLinkTagId: 'theme-link-tag',
      // "head"||"head-prepend" || "body" ||"body-prepend"
      themeLinkTagInjectTo: 'head',
      // 是否对抽取的css文件内对应scopeName的权重类名移除
      removeCssScopeName: true,
      // 可以自定义css文件名称的函数
      customThemeCssFileName: (scopeName) => scopeName,
    },
  });
}
