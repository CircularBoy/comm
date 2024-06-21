import { call, fork, takeLatest } from 'redux-saga/effects';

import type { ApiType } from '../../index.d';
import { REGISTRATION, LOGIN } from './action-types';
import type { RegistrationPayload, RegistrationResponse } from '../../../../../shared/types/user-types.ts';
import type { AxiosResponse } from 'axios';

//
// Watchers
//
function* registrationWatcher(api: ApiType) {
  yield takeLatest(REGISTRATION, registrationWorker, api);
}

function* loginWatcher() {
  yield takeLatest(LOGIN, loginWorker);
}

//
// Workers
//
function* registrationWorker(
  api: ApiType,
  action: { type: string; payload: RegistrationPayload },
): Generator<unknown, void, AxiosResponse<RegistrationResponse>> {
  console.log('blank worker', { api }, { action });
  try {
    const response = yield call(api.registration, action.payload);
    if (response.status === 200) {
      localStorage.setItem('access_token', response.data.accessToken);
    }
    console.log('get houses worker', response);
  } catch (e) {
    console.log('getHousesWorker error', e);
  }
}

function* loginWorker() {
  console.log('start app worker');
}

export default function* rootSaga(api: ApiType) {
  yield fork(registrationWatcher, api);
  yield fork(loginWatcher, api);
}
