import controller from './controller';
import RegistrationValidator from './validators/registration';

const routes = [
  {
    method: 'post',
    path: '/auth/registration',
    func: controller.registration,
    validator: RegistrationValidator
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
