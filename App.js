import React from 'react';

import MainTabNavigator from 'the_core/navigator/MainTabNavigator';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from 'the_core/redux/reducers';

const store = createStore(reducers,
  undefined,
  compose(
    applyMiddleware(thunk)
  )
);

const App = () => (
  <Provider store={store} >
    <MainTabNavigator />
  </Provider>
);

export default App;
