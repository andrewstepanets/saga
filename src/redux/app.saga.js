import { takeEvery, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log(`I'm incremented`);
  yield delay(5000);
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  yield takeEvery('INCREMENT', onIncrement);
}
