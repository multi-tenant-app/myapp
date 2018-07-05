/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainTabNavigator from 'the_core/navigator/MainTabNavigator';
//import {autoRehydrate} from 'redux-persist';
import {compose, createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from 'the_core/redux/reducer';

const store = createStore(reducer,
  undefined,
  compose(
    applyMiddleware(thunk)
  )
);

/*const store = createStore(reducers,
  undefined,
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);*/

//const store = createStore(reducers, applyMiddleware(axiosMiddleware(client)));



/*export default function configureStore() {
  store = createStore(reducers,
    undefined,
    compose(
      applyMiddleware(thunk, screenTracking),
      autoRehydrate()
    )
  );
  return store;
}*/


/**
* returns the store
**/
/*function getStore() {
  return store;
}

export {configureStore, getStore};*/


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store} >
        <MainTabNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
