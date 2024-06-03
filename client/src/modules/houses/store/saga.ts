import { fork, takeLatest, call } from 'redux-saga/effects';

import { ApiType } from '../../index.d';
import { GET_HOUSES } from './action-types';

//
// Watchers
//
function* getHousesWatcher(api: ApiType): Generator<any, void, unknown> {
  console.log('worker');
  yield takeLatest(GET_HOUSES, getHousesWorker, api);
}

//
// Workers
//
function* getHousesWorker(api: ApiType): Generator<any, void, unknown> {
  try {
    console.log('api', api);
    const response = yield call(api.getHouses);
    console.log('get houses worker', response);
  } catch (e) {
    console.log('getHousesWorker error', e);
  }
  // console.log(api);
}

export default function* rootSaga(api: ApiType) {
  yield fork(() => getHousesWatcher(api));
}
