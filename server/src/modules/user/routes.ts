import controller from './controller';
import RegistrationValidator from './validators/registration';

const routes = [
  {
    method: 'post',
    path: '/registration',
    func: controller.registration,
    validator: RegistrationValidator
  },
  {
    method: 'get',
    path: `/activation-account/:activationLink`,
    func: controller.activationAccount
  },
  {
    method: 'post',
    path: '/login',
    func: controller.login
  },
  {
    method: 'get',
    path: '/users',
    func: controller.getUsers
  },
  {
    method: 'post',
    path: '/logout',
    func: controller.logout
  },
  {
    method: 'get',
    path: '/refresh',
    func: controller.refresh
  }
];

export default routes;
