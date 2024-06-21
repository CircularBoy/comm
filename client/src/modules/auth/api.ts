import axiosInstance from '../../config/api';
import type { RegistrationPayload, RegistrationResponse } from '../../../../shared/types/user-types.ts';
import type { AxiosResponse } from 'axios';

// export type AuthApiType = {
//   registration: (payload: RegistrationPayload) => Promise<AxiosResponse<ApiResponse<RegistrationPayload>, any>>;
// };

const authApi = {
  registration: (payload: RegistrationPayload): Promise<AxiosResponse<RegistrationResponse>> => {
    console.log(payload);
    return axiosInstance.post<RegistrationResponse>('registration', payload);
  },
};
export type AuthApiType = typeof authApi;
// export const registrationApi = (payload: RegistrationPayload): Promise<AxiosResponse<RegistrationResponse>> => {
//   console.log(payload);
//   return axiosInstance.post<RegistrationResponse>('registration', payload);
// };

export default authApi;
