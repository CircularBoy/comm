import controller from './controller';
import routes from './routes';
import service from './service';
import model from './model';
import { IUtilModuleType } from './types';

const utilModule: IUtilModuleType = {
  controller,
  service,
  model,
  routes
};

export default utilModule;
