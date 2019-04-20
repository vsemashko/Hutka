import { connect } from 'react-redux';

import { getParkings, navigateToRentScreen, navigateToSignInScreen } from './actions';

import HutkaMap from './HutkaMapView';

export default connect(
  ({ hutkaMap }) => ({ parkings: hutkaMap.parkings }),
  {
    navigateToSignInScreen,
    navigateToRentScreen,
    getParkings,
  },
)(HutkaMap);
