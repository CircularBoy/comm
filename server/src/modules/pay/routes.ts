import controller from './controller';

const routes = [
  {
    method: 'post',
    path: '/pay/create',
    func: controller.createPay
  },
  {
    method: 'get',
    path: '/pay',
    func: controller.getPays
  }
];
export default routes;
