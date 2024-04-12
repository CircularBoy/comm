import { GET_HOUSES } from './action-types';

export function getHouses(payload?: any) {
  return {
    type: GET_HOUSES,
    payload,
  };
}
