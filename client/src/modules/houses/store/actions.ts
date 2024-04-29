import { GET_HOUSES } from './action-types';
import { ActionCreator } from "redux";

// export const blank: ActionCreator<{ type: string; payload?: any }> = (
//   payload
// ) => {
//   return {
//     type: BLANK,
//     payload,
//   };
// };
export const getHouses: ActionCreator<{type: string; payload?: any}> = (payload) => {
  return {
    type: GET_HOUSES,
    payload,
  };
}
