import AutoImport from 'unplugin-auto-import/vite';

// your plugin installation
export function configAutoImport() {
  return AutoImport({
    imports: ['vue','vue-router', 'pinia', '@vueuse/core'],
    dts:'src/typings/auto-import.d.ts'
  });
}
