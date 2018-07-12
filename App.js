import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import RootNavigator from 'yas-core/navigators/RootNavigator';

// Redux
import { configureStore } from 'yas-core/redux/store';

export default class App extends React.PureComponent {
  componentDidMount() {}

  render() {
    const { persistor, store } = configureStore();

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
