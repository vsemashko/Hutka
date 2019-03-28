import { compose, lifecycle } from 'recompose';
import SplashScreen from 'react-native-splash-screen';

import firebase from 'react-native-firebase';

import App from './App';

const withLifecycle = lifecycle({
  componentDidMount() {
    SplashScreen.hide();

    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // user alreade logged in
      } else {
        // user logged out
      }
    });
  },
});

export default compose(withLifecycle)(App);
