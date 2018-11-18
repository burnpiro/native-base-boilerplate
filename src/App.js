/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/Home/Home';
import ProfileScreen from './components/Profile/Profile';
import SideNav from './components/SideNav/SideNav';
type Props = {};

const DrawerNav = createDrawerNavigator(
  {
    Home: HomeScreen,
    ProfileScreen: ProfileScreen
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideNav {...props} />,
  }
)

const AppContainer = createAppContainer(DrawerNav);

export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
