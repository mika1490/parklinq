import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator,  SwitchNavigator } from 'react-navigation';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';

import HomePageDark from '../HomePageDark';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';

import { addListener } from '../../utilities/redux';

// export const FeedStack = StackNavigator({
//   Login: {
//     screen: LoginPage,
//     navigationOptions: {
//       title: 'Login',
//     },
//     Register: {
//       screen: RegistrationPage,
//     }
//   }
// })

export const Tabs = TabNavigator({
   Home: {
    screen: HomePageDark,
    navigationOptions: {
        tabBarLabel: 'Home',
        backgroundColor: 'black',
        tabBarIcon: ({tintColor}) => <Icon name="home" size={35} color={tintColor} backgroundColor={'black'}/>
    }
  },
  Login: {
    screen: LoginPage,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
    }
  },
  Register: {
    screen: RegistrationPage,
    navigationOptions: {
      tabBarLabel: 'Register',
      tabBarIcon: ({tintColor}) => <Icon name="register" size={35} color={tintColor}/>
    }
  }
})

export const AppNavigator = SwitchNavigator({
  Home: {
    screen: HomePageDark
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
      // <AppNavigator
      //   navigation={addNavigationHelpers({
      //     dispatch,
      //     state: nav,
      //     addListener,
      //   })}
      // />
      <Tabs
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

