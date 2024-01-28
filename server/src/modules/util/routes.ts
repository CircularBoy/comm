import controller from './controller';

const routes = [
  {
    method: 'get',
    path: '/utils/',
    func: controller.getUtils
  },
  {
    method: 'get',
    path: '/utils/delete',
    func: controller.deleteUtils
  },
  {
    method: 'post',
    path: '/utils/create-default',
    func: controller.createDefaultUtils
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
