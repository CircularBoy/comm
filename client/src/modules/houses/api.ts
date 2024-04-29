// import { ApiType } from '../../api';
import axios from '../../config/api';
import { IHouse } from "../../../../shared/types/house-types.ts";
// import { IHouse } from './type';



const api = {
  getHouses: async () => {
    return axios.get<IHouse[]>('houses');
  },

  createHouse: (data: any) => {
    return axios.post<IHouse>('houses/create', data);
  },
};

export default api;
