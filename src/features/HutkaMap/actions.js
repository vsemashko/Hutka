import { NavigationService } from 'src/services';

import { SIGN_IN, RENT } from 'src/constants/screens';

export const navigateToSignInScreen = () => () => NavigationService.navigate(SIGN_IN);
export const navigateToRentScreen = () => () => NavigationService.navigate(RENT);
