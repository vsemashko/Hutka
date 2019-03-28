import {
  compose, lifecycle, withState, withHandlers,
} from 'recompose';

import HutkaMap from './HutkaMap';

const withLifecycle = lifecycle({
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => console.log(position),
    );
  },
});

const readyMapLoadHandler = withHandlers({
  onMapReadyLoad: ({ mapIsReady, readyMapHandler }) => () => {
    readyMapHandler(!mapIsReady);
  },
});

export default compose(
  withState('mapIsReady', 'readyMapHandler', false),
  readyMapLoadHandler,
  withLifecycle,
)(HutkaMap);
