import modules from '../modules';
import { ApiType } from '../modules/index.d';
const api: ApiType = {} as ApiType;

// Object.values(modules).forEach((module: Module) => {
//   for (const item in module.api) {
//     if (Object.prototype.hasOwnProperty.call(module.api, item)) {
//       const method = item as keyof ApiType;
//       api[method] = module.api[method] as ApiType[keyof ApiType];
//     }
//   }
// });

////
Object.values(modules).forEach((module) => {
  Object.assign(api, module.api);
});

export default api;
