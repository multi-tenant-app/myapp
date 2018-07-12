import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import MainTabNavigator from 'yas-core/demo/navigator/MainTabNavigator';

// Redux
import configureStore from 'yas-core/demo/redux/store/configureStore';

export default class App extends React.PureComponent {
  componentDidMount() {}

  render() {
    const { persistor, store } = configureStore();

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainTabNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
