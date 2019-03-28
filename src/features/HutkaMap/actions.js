import { NavigationService } from 'src/services';

import { SIGN_IN } from 'src/constants/screens';

export const navigateToSignInScreen = () => () => NavigationService.navigate(SIGN_IN);
