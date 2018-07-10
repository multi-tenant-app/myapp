import React from 'react';

import MainTabNavigator from 'the_core/navigator/MainTabNavigator';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from 'the_core/redux/reducer';

const store = createStore(reducer,
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
