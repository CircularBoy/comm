import Modules from '../modules/index';
import { Router } from 'express';
import { Route } from '../modules/types';

const router: Router = Router();
Object.values(Modules).forEach((module) => {
  const { routes } = module;
  routes.forEach((route: Route) => {
    if (route.validator) {
      router[route.method](`${route.path}`, route.validator, route.func);
    } else {
      router[route.method](`${route.path}`, route.func);
    }
  });
});
export default router;
