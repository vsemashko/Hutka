import { connect } from 'react-redux';

import { confirmCode, sendVerificationCodeAgain } from './actions';

import ConfirmSignIn from './ConfirmSignIn';

export default connect(null, { confirmCode, sendVerificationCodeAgain })(ConfirmSignIn);
