import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';

import MainTabNavigator from 'the_core/navigator/MainTabNavigator';
import { Provider } from 'react-redux';

// Components
import ExpComponents from 'the_core/uicomponents/ExpComponents';

// Constants
import { DEBUGS } from 'the_core/config/constants';

// Redux
import configureStore from 'the_core/redux/store/configureStore';

const App = () => {
  if (DEBUGS.EXPERIMENTALS) return <ExpComponents />;

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
