import Modules from '../modules/index';
import { Router } from 'express';
import { Route } from '../modules/types';
import authMiddleware from '../helpers/middleware/auth-middleware';

const router: Router = Router();
Object.values(Modules).forEach((module) => {
  const { routes } = module;
  routes.forEach((route: Route) => {
    const middlewareArray = [];

    // Add authentication middleware if it exists
    if (route.role === 'user') {
      middlewareArray.push(authMiddleware);
    }

    // Add validation middleware if it exists
    if (route.validator) {
      middlewareArray.push(route.validator);
    }

    // Add route function as the last middleware
    middlewareArray.push(route.func);

    // Apply middlewares to the route
    router[route.method](`${route.path}`, ...middlewareArray);
  });
});
export default router;
