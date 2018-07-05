import { AppRegistry } from 'react-native';
import App from './App';

//https://github.com/react-navigation/react-navigation/issues/4378
//https://github.com/facebook/react-native/issues/18201
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('myapp', () => App);
