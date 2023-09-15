import controller from './controller';
import routes from './routes';
import service from './service';
import model from './model';
import { IHouseModuleType } from './types';

const houseModule: IHouseModuleType = {
  controller: controller,
  service: service,
  model,
  routes
};

export default houseModule;
