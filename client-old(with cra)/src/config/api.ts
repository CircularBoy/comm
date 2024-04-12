// // import _blank from '../modules/_blank/api';
// // import houses from '../modules/houses/api';
//
// // if (modules.api) {
// //   console.log({ modules });
// // }
//
// const apiConfig = {
//   baseUrl: 'http://localhost:3001/api',
// };
//
// const request = async (path: string, method: string, data?: any) => {
//   const options = {
//     method: method,
//     headers: {
//       'content-type': 'application/json',
//     },
//     ...(data ? { body: JSON.stringify(data) } : {}),
//   };
//
//   try {
//     const response = await fetch(`${apiConfig.baseUrl}/${path}`, options);
//     const data1 = await response.json();
//     // console.log({data})
//     return data1;
//   } catch (e) {
//     console.log('response', e);
//   }
// };
//
// const query = {
//   get: (path: string) => request(path, 'GET'),
//   post: (path: string, data: any) => request(path, 'POST', data),
// };
//
// export default query;

import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3001/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance: AxiosInstance = axios.create(config);

export default axiosInstance;
