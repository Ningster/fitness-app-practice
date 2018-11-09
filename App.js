/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import ActivityScreen from './components/ActivityScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Activity: { screen: ActivityScreen },
});

export default App;
