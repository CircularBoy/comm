// import type { ActionCreator } from 'redux';

import { REGISTRATION } from './action-types';
import { RegistrationPayload } from '../../../../../shared/types/user-types.ts';

export function registration(payload: RegistrationPayload) {
  return {
    type: REGISTRATION,
    payload,
  };
}

// interface ITest {
//   type: string;
//   payload?: any;
// }
// export const registration: ActionCreator<{ type: string; payload: RegistrationPayload }> = (payload) => {
//   return {
//     type: REGISTRATION,
//     payload,
//   };
// };
