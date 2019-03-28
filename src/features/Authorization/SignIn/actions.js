import { createAction } from 'redux-actions';
import firebase from 'react-native-firebase';

import config from 'src/config';
import { NavigationService } from 'src/services';

import { CONFIRM_SIGN_IN } from 'src/constants/screens';

export const setPhoneNumber = createAction(
  'AUTHORIZATION/EDIT_PHONE_NUMBER',
  phoneNumber => ({ phoneNumber }),
);

export const resetPhoneNumber = createAction('AUTHORIZATION/RESET_PHONE_NUMBER');

export const fetchCurrentUserStart = createAction('AUTHORIZATION/FETCH_CURRENT_USER_START');
export const fetchCurrentUserSuccess = createAction('AUTHORIZATION/FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('AUTHORIZATION/FETCH_CURRENT_USER_FAILURE');

export const signIn = ({ phoneNumber }, { setErrors, setSubmitting }) => (dispatch) => {
  const validPhoneNumber = `+375${phoneNumber}`;
  dispatch(fetchCurrentUserStart());
  setSubmitting(true);

  firebase.auth().signInWithPhoneNumber(validPhoneNumber)
    .then(async (confirmResult) => {
      dispatch(setPhoneNumber(validPhoneNumber));
      dispatch(fetchCurrentUserSuccess());

      config.confirmResult = confirmResult;

      await NavigationService.navigate(CONFIRM_SIGN_IN);

      setSubmitting(false);
    })
    .catch(() => {
      setErrors({ phoneNumber: 'Что-то пошло не так...' });
      dispatch(fetchCurrentUserFailure());

      setSubmitting(false);
    });
};
