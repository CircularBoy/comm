import { fork, takeLatest } from 'redux-saga/effects';

import { ApiType } from '../../index.d';
import { BLANK, STARTAPP } from './action-types';

//
// Watchers
//
function* blankWatcher(api: ApiType) {
  yield takeLatest(BLANK, blankWorker, api);
}

function* startAppWatcher() {
  yield takeLatest(STARTAPP, startAppWorker);
}

//
// Workers
//
function* blankWorker(api: ApiType) {
  const houses: ApiType = yield api.getHouses();
  yield console.log('blank worker', api);
  yield console.log('blank worker', houses);
}

function* startAppWorker() {
  yield console.log('start app worker');
}

export default function* rootSaga(api: ApiType) {
  yield fork(startAppWatcher);
  yield fork(blankWatcher, api);
}
