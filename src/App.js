import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import WebViewScreen from './screens/WebViewScreen';

const StackNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ScanScreen: ScanScreen,
    WebViewScreen: WebViewScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(StackNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
