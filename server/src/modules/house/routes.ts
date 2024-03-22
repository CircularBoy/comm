import controller from './controller';

const routes = [
  {
    method: 'post',
    path: '/houses/create',
    func: controller.createHouse,
    role: 'user' as const
  },
  {
    method: 'get',
    path: '/houses',
    func: controller.getHouses,
    role: 'user' as const
  }
];

export default routes;
