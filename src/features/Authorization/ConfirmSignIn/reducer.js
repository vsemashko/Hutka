import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  fetchConfirmCodeStart,
  fetchConfirmCodeSuccess,
  fetchConfirmCodeFailure,
  fetchSendCodeAgainStart,
  fetchSendCodeAgainSuccess,
  fetchSendCodeAgainFailure,
} from './actions';

const fetchingConfirmCode = handleActions({
  [fetchConfirmCodeStart]: () => true,
  [combineActions(fetchConfirmCodeSuccess, fetchConfirmCodeFailure)]: () => false,
}, false);

const fetchingSendCodeAgain = handleActions({
  [fetchSendCodeAgainStart]: () => true,
  [combineActions(fetchSendCodeAgainSuccess, fetchSendCodeAgainFailure)]: () => false,
}, false);

export default combineReducers({
  fetchingConfirmCode,
  fetchingSendCodeAgain,
});
