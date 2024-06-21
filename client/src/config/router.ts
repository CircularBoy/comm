import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import modules from '../modules';
import { Module } from '../modules/index.d';

const allModules = {
  ...modules,
};

const arr: RouteObject[] = [];
Object.values(allModules).forEach((module: Module) => {
  module.router.forEach((route: RouteObject) => {
    arr.push(route);
  });
});

const router = createBrowserRouter(arr);

export default router;
