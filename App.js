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

// import React, {Component} from 'react-native';
// import HomeScreen from './components/HomeScreen';
// import {Provider} from 'react-redux';
// import stepCounterReducer from './reducers';
// import { createStore } from 'redux';

// const store = createStore(stepCounterReducer)

// export default class App extends Component {
//   render() {
//       return (
//           <Provider store={store}>
//               <HomeScreen/>
//           </Provider>
//       )
//   }
// }
// // const App = () => {
// //   return (
// //     <Provider store={store}>
// //       <HomeScreen />
// //     </Provider>
// //   )
// // }

// // export default App
