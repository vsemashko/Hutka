import React from 'react';

import AppNavigator from 'src/features/AppNavigator';

import { NavigationService } from 'src/services';

const App = () => (
  <AppNavigator ref={(navigationRef) => {
    NavigationService.setTopLevelNavigator(navigationRef);
  }}
  />
);

export default App;
