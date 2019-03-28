import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';

import SignIn from 'src/features/Authorization/SignIn';
import ConfirmSignIn from 'src/features/Authorization/ConfirmSignIn';
import ServiceUseRules from 'src/features/Authorization/ServiceUseRules';
import HutkaMap from 'src/features/HutkaMap';

import { MapHeaderTitle } from 'src/components';

const AppNavigator = createStackNavigator({
  HutkaMap: {
    screen: HutkaMap,
    navigationOptions: {
      headerBackground: <MapHeaderTitle />,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Регистрация',
    },
  },
  ConfirmSignIn: {
    screen: ConfirmSignIn,
    navigationOptions: {
      title: 'Регистрация',
    },
  },
  ServiceUseRules: {
    screen: ServiceUseRules,
    navigationOptions: {
      title: 'Регистрация',
    },
  },
}, {
  headerLayoutPreset: 'center',
  initialRouteName: 'HutkaMap',
  defaultNavigationOptions: getDefaultNavigationOptions(),
});

export default createAppContainer(AppNavigator);
