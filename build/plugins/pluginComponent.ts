import Components from 'unplugin-vue-components/vite';
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers';

// your plugin installation
export function configPluginComponent() {
  return Components({
    dirs: ['src/components/core'],
    extensions: ['vue'],
    dts: 'src/typings/core-components.d.ts',
    resolvers: [
      AntDesignVueResolver({ importStyle: 'less' }),
    ],
  });
}
