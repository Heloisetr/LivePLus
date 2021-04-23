import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reducers from 'reducers/index';
import rootSaga from 'sagas/root';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['dashboardState'],
  timeout: null,
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
