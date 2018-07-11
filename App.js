import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';

import MainTabNavigator from 'the_core/navigator/MainTabNavigator';
import { Provider } from 'react-redux';
import configureStore from 'the_core/redux/store/configureStore';

const App = () => {
  const { persistor, store } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainTabNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
