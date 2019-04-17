import { connect } from 'react-redux';

import { navigateToRentScreen, navigateToSignInScreen } from './actions';

import HutkaMap from './HutkaMapView';

export default connect(
  null, {
    navigateToSignInScreen,
    navigateToRentScreen,
  },
)(HutkaMap);
