import controller from './controller';

const routes = [
  {
    method: 'post',
    path: '/default-utils/create',
    func: controller.createDefaultUtils
  },
  {
    method: 'post',
    path: '/default-utils/:id/addPlan',
    func: controller.addPlan
  },
  {
    method: 'get',
    path: '/default-utils',
    func: controller.getDefaultUtils
  }
];
export default routes;
