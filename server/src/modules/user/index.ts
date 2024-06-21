import controller from './controller';
import routes from './routes';
import service from './services/auth-service';
import model from './models/user';
import { IUserModule } from './types';

const UserModule: IUserModule = {
  controller,
  service,
  model,
  routes
};

export default UserModule;
