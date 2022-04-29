import { createRouter, createWebHistory } from 'vue-router';
import { App } from 'vue';
import { basicRoutes } from '/@/router/routes';


/**
 * 创建路由
 */
export const router = createRouter({
  history: createWebHistory(import.meta.env.SKOTE_PUBLIC_PATH),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export const handleResetRouter = () => {
  router.getRoutes().forEach(route => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
};

/**
 * 挂载路由
 * @param app
 */
export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
