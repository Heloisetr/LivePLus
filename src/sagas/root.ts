import { all, spawn } from 'redux-saga/effects';

import dashboardSaga from 'sagas/dashboardSaga';

function* sagas() {
  yield all([
    spawn(dashboardSaga),
  ]);
}

export default sagas;
