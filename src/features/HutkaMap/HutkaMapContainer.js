import { connect } from 'react-redux';

import { navigateToSignInScreen } from './actions';

import HutkaMap from './HutkaMapView';

export default connect(
  null, {
    navigateToSignInScreen,
  },
)(HutkaMap);
