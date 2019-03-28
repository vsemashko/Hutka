import { createAction } from 'redux-actions';
import firebase from 'react-native-firebase';

import { getPhoneNumber } from 'src/features/Authorization/SignIn/selectors';

import config from 'src/config';
import { NavigationService } from 'src/services';

import { SERVICE_USE_RULES } from 'src/constants/screens';

export const setToken = createAction(
  'AUTHORIZATION/SET_TOKEN',
  token => ({ token }),
);

export const resetToken = createAction(
  'AUTHORIZATION/RESET_TOKEN',
);

export const fetchConfirmCodeStart = createAction('AUTHORIZATION/FETCH_CONFIRM_CODE_START');
export const fetchConfirmCodeSuccess = createAction('AUTHORIZATION/FETCH_CONFIRM_CODE_SUCCESS');
export const fetchConfirmCodeFailure = createAction('AUTHORIZATION/FETCH_CONFIRM_CODE_FAILURE');

export const fetchSendCodeAgainStart = createAction('AUTHORIZATION/FETCH_SEND_CODE_AGAIN_START');
export const fetchSendCodeAgainSuccess = createAction('AUTHORIZATION/FETCH_SEND_CODE_AGAIN_SUCCESS');
export const fetchSendCodeAgainFailure = createAction('AUTHORIZATION/FETCH_SEND_CODE_AGAIN_FAILURE');

export const confirmCode = ({ code }, { setErrors, setSubmitting }) => (dispatch) => {
  dispatch(fetchConfirmCodeStart());
  setSubmitting(true);

  config.confirmResult.confirm(code)
    .then(() => {
      firebase.auth().currentUser.getIdToken(true)
        .then(async (token) => {
          dispatch(setToken(token));
          dispatch(fetchConfirmCodeSuccess());

          await NavigationService.navigate(SERVICE_USE_RULES);

          setSubmitting(false);
        });
    })
    .catch(() => {
      dispatch(fetchConfirmCodeFailure());
      setErrors({ code: 'Неверный код' });

      setSubmitting(false);
    });
};

export const sendVerificationCodeAgain = () => (dispatch, getState) => {
  const state = getState();
  const phoneNumber = getPhoneNumber(state);

  dispatch(fetchSendCodeAgainStart());

  firebase.auth().signInWithPhoneNumber(phoneNumber)
    .then((confirmResult) => {
      config.confirmResult = confirmResult;
      dispatch(fetchSendCodeAgainSuccess());
    })
    .catch(() => {
      dispatch(fetchSendCodeAgainFailure());
    });
};
