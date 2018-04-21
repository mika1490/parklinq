import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator,  SwitchNavigator } from 'react-navigation';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, NavigatorIOS } from 'react-native';
import { Icon } from 'react-native-elements';

import HomePageDark from '../HomePageDark';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';

import { addListener } from '../../utilities/redux';

// export const FeedStack = StackNavigator({
//   Home: {
//     screen: HomePage,
//   },
//   Login: {
//     screen: LoginPage,
//     navigationOptions: {
//       title: 'Login',
//     },
//     Register: {
//       screen: RegistrationPage,
//     },
//   } 
// })

export const AppNavigator = SwitchNavigator({
  Home: {
    screen: HomePage
  },
  Login: {
    screen: LoginPage
  },
  Register: {
    screen: RegistrationPage
  }
});


class AppWithNavigationState extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

