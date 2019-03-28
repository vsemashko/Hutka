import { combineReducers } from 'redux';
import authorization from 'src/features/Authorization/SignIn/reducer';
import serviceUseRules from 'src/features/Authorization/ServiceUseRules/reducer';
import confirmSignIn from 'src/features/Authorization/ConfirmSignIn/reducer';

export default combineReducers({
  authorization,
  serviceUseRules,
  confirmSignIn,
});
