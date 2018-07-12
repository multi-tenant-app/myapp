import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

// Constants
import { IN_DEV_MODE } from 'yas-core/configs/constants';

// Navigators
import RootNavigator from 'yas-core/navigators/RootNavigator';

// Redux
import { configureStore } from 'yas-core/redux/store';

// Setup i18n
import 'yas-core/configs/i18n';

// Inject common APIs to debug directly in debugger's console
if (IN_DEV_MODE)
  Object.assign(global, {
    $: require('lodash/fp'),
    _: require('lodash'),
    luxon: require('luxon'),
    numeral: require('numeral'),
  });

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
