import { connect } from 'react-redux';

import { signIn } from './actions';

import SignIn from './SignIn';

export default connect(
  null, {
    signIn,
  },
)(SignIn);
