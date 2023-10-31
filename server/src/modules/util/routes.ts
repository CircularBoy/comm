import controller from './controller';

const routes = [
  {
    method: 'get',
    path: '/util/',
    func: controller.getUtils
  },
  {
    method: 'post',
    path: '/util/create',
    func: controller.createUtils
  },
  {
    method: 'post',
    path: '/util/:id/addPlan',
    func: controller.addPlan
  }
  // {
  // 	method: 'get',
  // 	path: '/helper',
  // 	func: controller.getPays
  // },
];
export default routes;
