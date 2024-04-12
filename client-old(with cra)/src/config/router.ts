import { createBrowserRouter, RouteObject } from 'react-router-dom';

import modules from '../modules';
import { IModule } from '../modules/index.d';

const allModules = {
  ...modules,
};

const arr: RouteObject[] = [];
Object.values(allModules).forEach((module: IModule) => {
  module.router.forEach((route: RouteObject) => {
    arr.push(route);
  });
});

const router = createBrowserRouter(arr);

export default router;
