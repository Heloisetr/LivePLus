import { combineReducers } from 'redux';

import dashboardState from 'reducers/dashboardReducer';

const reducers = {
  dashboardState,
};

export default combineReducers(reducers);
