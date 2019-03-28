import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import {
  fetchConfirmCotractStart,
  fetchConfirmCotractSuccess,
  fetchConfirmCotractFailure,
} from './actions';

const fetching = handleActions({
  [fetchConfirmCotractStart]: () => true,
  [combineActions(fetchConfirmCotractSuccess, fetchConfirmCotractFailure)]: () => false,
}, false);

export default combineReducers({
  fetching,
});
