import { compose, lifecycle } from 'recompose';

import HutkaMap from './HutkaMap';

const withLifecycle = lifecycle({
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error),
    );
  },
});

export default compose(withLifecycle)(HutkaMap);
