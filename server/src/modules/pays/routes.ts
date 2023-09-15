import controller from './controller';

const routes = [
  {
    method: 'post',
    path: '/pays/create',
    func: controller.create
  },
  {
    method: 'get',
    path: '/pays',
    func: controller.getPays
  }
];
export default routes;
