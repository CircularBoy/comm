import controller from './controller';

const routes = [
  {
    method: 'post',
    path: '/house/create',
    func: controller.createHouse,
    role: 'user' as const
  },
  {
    method: 'get',
    path: '/house',
    func: controller.getHouses,
    role: 'user' as const
  }
];

export default routes;
