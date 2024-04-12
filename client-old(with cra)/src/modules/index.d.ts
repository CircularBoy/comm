import { ForkEffect } from 'redux-saga/effects';
import { RouteObject } from 'react-router-dom';
import modules from './index';

export interface IModule {
  saga: (api: any) => Generator<ForkEffect<void>, void, unknown>;
  reducer: {
    initialState: any;
    reducer: any;
    stateName: string;
  };
  router: RouteObject[];
  api: { [key: string]: (data: any) => Promise<any> };
}

export type Modules = typeof modules;

export type ApiMethods = {
  [K in keyof Modules]: keyof Modules[K]['api'];
}[keyof Modules];

export type ApiType = {
  [key in ApiMethods]: (data?: any) => Promise<any>;
};
