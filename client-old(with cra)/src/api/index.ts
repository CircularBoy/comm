import modules from '../modules';
import { ApiType, IModule } from '../modules/index.d';
const api: ApiType = {} as ApiType;

Object.values(modules).forEach((module: IModule) => {
  for (const item in module.api) {
    if (module.api.hasOwnProperty(item)) {
      const method = item as keyof ApiType;
      api[method] = module.api[method] as ApiType[keyof ApiType];
    }
  }
});

console.log({ api });

export default api;
