import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  fetchCurrentUserStart,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
  setPhoneNumber,
  resetPhoneNumber,
} from './actions';

const initialPhoneState = '';

const fetching = handleActions({
  [fetchCurrentUserStart]: () => true,
  [combineActions(fetchCurrentUserSuccess, fetchCurrentUserFailure)]: () => false,
}, false);

const telephoneNumber = handleActions({
  [setPhoneNumber]: (state, action) => {
    const { phoneNumber } = action.payload;

    return phoneNumber;
  },
  [resetPhoneNumber]: () => initialPhoneState,
}, initialPhoneState);

export default combineReducers({
  fetching,
  telephoneNumber,
});
