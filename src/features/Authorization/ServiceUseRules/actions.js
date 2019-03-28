import { createAction } from 'redux-actions';
import { Linking } from 'react-native';

import { NavigationService } from 'src/services';

import { HUTKA_MAP } from 'src/constants/screens';

import config from 'src/config';

export const fetchConfirmCotractStart = createAction('AUTHORIZATION/FETCH_CONFIRM_CONTRACT_START');
export const fetchConfirmCotractSuccess = createAction('AUTHORIZATION/FETCH_CONFIRM_CONTRACT_SUCCESS');
export const fetchConfirmCotractFailure = createAction('AUTHORIZATION/FETCH_CONFIRM_CONTRACT_FAILURE');

export const navigateByContractLink = () => () => Linking.openURL(config.contractLink)
  .then(() => {})
  .catch(() => {});

export const confirmContract = () => (dispatch) => {
  dispatch(fetchConfirmCotractStart());

  dispatch(fetchConfirmCotractSuccess());
  NavigationService.navigate(HUTKA_MAP);
};
