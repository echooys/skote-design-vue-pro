/**
 * 包文件大小分析
 * https://github.com/btd/rollup-plugin-visualizer
 */
import visualizer from 'rollup-plugin-visualizer';

export function configVisualizerConfig() {
  return visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  });
}
