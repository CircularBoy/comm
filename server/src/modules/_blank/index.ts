import controller from './controller';
import routes from './routes';
import service from './service';
import model from './model';
import { IBlankModule } from './types';

const _blankModule: IBlankModule = {
  controller,
  service,
  model,
  routes
};

export default _blankModule;
