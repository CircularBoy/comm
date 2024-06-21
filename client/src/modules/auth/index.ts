import api from './api';
import router from './router';
import reducer from './store/reducer';
import saga from './store/saga';

// export interface IModule {
//   saga: () => void;
//   reducer: {
//     initialState: any;
//     reducer: any;
//     stateName: string;
//   };
//   router: RouteObject[];
// }
const module = {
  saga,
  reducer,
  router,
  api,
};

export default module;
