import {
  compose, lifecycle, withHandlers, withState,
} from 'recompose';
import getRegionFromCurrentPosition from '../../utils/getRegionFromCurrentPosition';
import { getToken } from '../../utils/tokenStorage';

import HutkaMap from './HutkaMap';

const withLifecycle = lifecycle({
  state: { token: null },
  async componentDidMount() {
    const [region, token] = await Promise.all([
      getRegionFromCurrentPosition(),
      getToken(),
    ]);
    this.props.getParkings(token);
    this.setState({ region, token });
  },
});

const readyMapLoadHandler = withHandlers({
  onMapReadyLoad: ({ mapIsReady, readyMapHandler }) => () => {
    readyMapHandler(!mapIsReady);
  },
});

export default compose(
  withState('mapIsReady', 'readyMapHandler', false),
  withState('token', 'setToken', null),
  readyMapLoadHandler,
  withLifecycle,
)(HutkaMap);
