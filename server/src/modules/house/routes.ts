import controller from './controller';

const routes = [
  {
    method: 'post',
    path: '/house/create',
    func: controller.createHouse
  },
  {
    method: 'get',
    path: '/house',
    func: controller.getHouses
  }
];

export default routes;
