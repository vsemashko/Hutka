import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { fetchParkingsSuccess } from './actions';

const parkings = handleActions({
  [fetchParkingsSuccess]: (state, action) => action.payload,
}, []);


export default combineReducers({
  parkings,
});
