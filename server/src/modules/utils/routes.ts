import controller from './controller';

const routes = [
  {
    method: 'get',
    path: '/utils/',
    func: controller.getUtils
  },
  {
    method: 'post',
    path: '/utils/create',
    func: controller.createUtils
  },
  {
    method: 'post',
    path: '/utils/:id/addPlan',
    func: controller.addPlan
  }
  // {
  // 	method: 'get',
  // 	path: '/helper',
  // 	func: controller.getPays
  // },
];
export default routes;
