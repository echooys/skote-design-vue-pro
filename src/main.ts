import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import 'virtual:svg-icons-register';

import 'ant-design-vue/es/message/style/index.less'
import '/@/design/common.less'

import { createApp } from 'vue';

import App from '/@/App.vue';
import { setupStore } from '/@/store';
import { setupRouter } from '/@/router';



async function bootstrap() {
  const app = createApp(App);

  setupStore(app)
  setupRouter(app)

  app.mount('#app');
}


void bootstrap();
