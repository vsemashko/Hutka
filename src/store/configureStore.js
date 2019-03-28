import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import { cacheAuthorizationDataToAsyncStorage } from 'src/features/Authorization/ConfirmSignIn/middleware';

import rootReducer from './rootReducer';

export default function configureStore(initialState = {}) {
  const middleware = [
    thunk,
    cacheAuthorizationDataToAsyncStorage,
  ];

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
}
