import api from './api';
import router from './router';
import reducer from './store/reducer';
import saga from './store/saga';

const module = {
  saga,
  reducer,
  router,
  api,
};

export default module;
