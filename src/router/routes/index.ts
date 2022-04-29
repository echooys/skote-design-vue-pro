import { RouteRecordRaw } from 'vue-router';
import { DefaultLayout } from '/@/router/constant';


const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

/**
 * 前端控制动态路由
 */
export const asyncRoutes = [...routeModuleList];

export const AppRoute: RouteRecordRaw = {
  path: '/',
  name: 'App',
  component: DefaultLayout,
  redirect: '/test',
  children: [
    {
      path: '/test',
      name: 'test',
      component: () => import('/@/pages/test/index.vue'),
    },
  ],
};

export const basicRoutes = [
  AppRoute
];
