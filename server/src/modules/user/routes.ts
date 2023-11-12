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
  },
  {
    method: 'get',
    path: `/activation-account/:activationLink`,
    func: controller.activationAccount
  }
];

export default routes;
