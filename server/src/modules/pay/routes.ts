import controller from './controller';

const routes = [
  {
    method: 'post',
    path: '/pay/create',
    func: controller.create
  },
  {
    method: 'get',
    path: '/pay',
    func: controller.getPays
  }
];
export default routes;
