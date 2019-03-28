import { connect } from 'react-redux';

import { navigateByContractLink, confirmContract } from './actions';

import ServiceUseulesView from './ServiceUseulesView';

export default connect(
  null, {
    navigateByContractLink,
    confirmContract,
  },
)(ServiceUseulesView);
