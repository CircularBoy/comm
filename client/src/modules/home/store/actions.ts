import { ActionCreator } from 'redux';

import { STARTAPP } from './action-types';
import { BLANK } from './action-types';

export function startApp(payload?: any) {
  return {
    type: STARTAPP,
    payload,
  };
}

// interface ITest {
//   type: string;
//   payload?: any;
// }
export const blank: ActionCreator<{ type: string; payload?: any }> = (
  payload
) => {
  return {
    type: BLANK,
    payload,
  };
};
