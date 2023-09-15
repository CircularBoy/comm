import Modules from '../modules/index';
import { Router } from 'express';

const router: Router = Router();
Object.values(Modules).forEach((module) => {
  const { routes } = module;
  routes.forEach((route) => {
    router[route.method](`${route.path}`, route.func);
  });
});
export default router;
