import {
  compose, withProps, withState, withHandlers,
} from 'recompose';

import { createServiceRulesViewModel } from './viewModel';

import ServiceUseRules from './ServiceUseRules';

const withViewModel = withProps(() => ({
  viewModel: createServiceRulesViewModel(),
}));

const withCheckBoxHandler = withHandlers({
  onCheckBoxPress: ({ handleCheckBox, isChecked }) => () => {
    handleCheckBox(!isChecked);
  },
});

export default compose(
  withState('isChecked', 'handleCheckBox', false),
  withCheckBoxHandler,
  withViewModel,
)(ServiceUseRules);
