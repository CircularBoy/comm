import controller from './controller';
import routes from './routes';
import service from './service';
import model from './model';
import { IPayModuleType } from './types';

const payModule: IPayModuleType = {
  controller,
  service,
  model,
  routes
};

export default payModule;
