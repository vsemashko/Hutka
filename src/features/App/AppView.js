import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { compose, lifecycle } from 'recompose';
import { removeToken } from '../../utils/tokenStorage';
import { setToken } from '../Authorization/ConfirmSignIn/actions';


import App from './App';

const withLifecycle = lifecycle({
  componentDidMount() {
    SplashScreen.hide();

    firebase.auth()
      .onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken(true);
          this.props.dispatch(setToken(token));
        } else {
          this.props.dispatch(removeToken());
        }
      });
  },
});

export default compose(
  connect(),
  withLifecycle,
)(App);
