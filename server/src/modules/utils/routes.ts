import controller from './controller';

const routes = [
  {
    method: 'post',
    path: '/helper/create',
    func: controller.createUtils
  },
  {
    method: 'post',
    path: '/helper/:id/addPlan',
    func: controller.addPlan
  }
  // {
  // 	method: 'get',
  // 	path: '/helper',
  // 	func: controller.getPays
  // },
];
export default routes;
