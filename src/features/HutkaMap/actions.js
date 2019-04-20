import { createAction } from 'redux-actions';
import { NavigationService } from 'src/services';
import config from 'src/config';
import { SIGN_IN, RENT } from 'src/constants/screens';
import { get, getHeaders } from '../../services/networkService';

export const fetchParkingsSuccess = createAction('HUTKA_MAP/FETCH_PARKINGS_SUCCESS');

export const navigateToSignInScreen = () => () => NavigationService.navigate(SIGN_IN);
export const navigateToRentScreen = () => () => NavigationService.navigate(RENT);

export const getParkings = token => async (dispatch) => {
  const headers = getHeaders(token);
  const parkings = await get(`${config.apiUrl}/v1/parking-area`, headers);
  dispatch(fetchParkingsSuccess(parkings));
};
