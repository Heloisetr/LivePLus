import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from 'store';

import Moment from 'moment';

import Routes from 'Routes';

Moment.locale('fr');

class AppProvider extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default AppProvider;
