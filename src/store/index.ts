import type { App } from 'vue';
import { createPinia } from 'pinia';

export const store = createPinia();

/**
 * 挂载状态管理
 * @param app
 */
export const setupStore = (app: App<Element>)=> {
  app.use(store);
}

