import { ForkEffect } from 'redux-saga/effects';
import { RouteObject } from 'react-router-dom';
import modules from './index';
import authApi from "./auth/api.ts";
import housesApi from "./houses/api.ts";
import homeApi from "./home/api.ts";
import blankApi from "./_blank/api.ts";
import api from "../api";

// export interface IModule {
//   saga: (api: ApiType) => Generator<ForkEffect<void>, void, unknown>;
//   reducer: {
//     initialState: any;
//     reducer: any;
//     stateName: string;
//   };
//   router: RouteObject[];
//   api: { [key: string]: (data: any) => Promise<any> };
// }

// type HouseModuleType = typeof modules.houses
// type AuthModuleType = typeof modules.auth
//
// export type Module = HouseModuleType | AuthModuleType

export type Modules = typeof modules;

// Define a type for all module keys
type ModuleKeys = keyof typeof modules;

// Define a type that represents the union of all module types
export type Module = typeof modules[ModuleKeys];

// export type ApiType = {
//   [K in keyof Modules]: {
//     [M in keyof Modules[K]['api']]: Modules[K]['api'][M];
//   };
// }[keyof Modules];

type auth = typeof housesApi
// export type ApiType = typeof housesApi | typeof authApi

export type ApiType = {
  registration: (payload: RegistrationPayload) => Promise<AxiosResponse<RegistrationResponse>>;
  getHouses: () => Promise<AxiosResponse<GetHouseResponse>>;
};

// export type ApiMethods = {
//   [K in keyof Modules]: keyof Modules[K]['api'];
// }[keyof Modules];
//
// export type ApiType = {
//   [K in keyof Modules]: {
//     [M in keyof Modules[K]['api']]: Modules[K]['api'][M];
//   };
// }[keyof Modules];
//
// export type ApiType = {
//   [key in ApiMethods]: (data?: any) => Promise<any>;
// };
