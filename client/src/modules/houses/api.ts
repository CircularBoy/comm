// import { ApiType } from '../../api';
import axios from '../../config/api';
import { GetHouseResponse, IHouseWithId } from '../../../../shared/types/house-types.ts';
import type { AxiosResponse } from 'axios';

const housesApi = {
  getHouses: async (): Promise<AxiosResponse<GetHouseResponse>> => {
    return axios.get<IHouseWithId[]>('houses');
  },

  // createHouse: (data: any) => {
  //   return axios.post<IHouse>('houses/create', data);
  // },
};

export type HousesApiType = typeof housesApi;
export default housesApi;
