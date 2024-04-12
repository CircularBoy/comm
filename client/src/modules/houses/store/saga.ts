import { fork, takeLatest } from 'redux-saga/effects';

import { ApiType } from '../../index.d';
import { GET_HOUSES } from './action-types';

//
// Watchers
//
function* getHousesWatcher(api: ApiType): Generator<any, void, unknown> {
  yield takeLatest(GET_HOUSES, getHousesWorker, api);
}

//
// Workers
//
function* getHousesWorker(api: ApiType): Generator<any, void, unknown> {
  console.log('api', api.blank());
  // @ts-ignore
  // const response = yield call(api.getHouses);
  // console.log(api);
  console.log('get houses worker', response);
}

export default function* rootSaga(api: ApiType) {
  yield fork(() => getHousesWatcher(api));
}
