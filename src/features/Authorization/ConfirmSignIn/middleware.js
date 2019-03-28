import { tokenStorage } from 'src/utils';

import { setToken, resetToken } from './actions';

export const cacheAuthorizationDataToAsyncStorage = () => next => (action) => {
  next(action);

  switch (action.type) {
    case setToken.toString():
      tokenStorage.setToken(action.payload.token);
      break;
    case resetToken.toString():
      tokenStorage.removeToken();
      break;
    default:
      break;
  }
};
