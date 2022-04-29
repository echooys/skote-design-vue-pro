/**
 *  用于快速创建 SVG 的 Vite 插件。
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import { SVG_ICONS_DIR } from '../constant';

export function configSvgIconsPlugin(isBuild: boolean) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), SVG_ICONS_DIR)],
    svgoOptions: isBuild,
    // default
    symbolId: 'icon-[dir]-[name]',
  });
}
