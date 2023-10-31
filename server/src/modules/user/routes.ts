import controller from './controller';

const routes = [
  {
    method: 'post',
    path: '/auth/registration',
    func: controller.registration
  },
  {
    method: 'get',
    path: '/users',
    func: controller.getUsers
  }
];

export default routes;
