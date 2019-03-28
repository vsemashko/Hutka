import config from 'src/config';
import { tokenStorage } from 'src/utils';
import * as networkService from './networkService';

const {
  post,
} = networkService;
const API_URL = config.apiUrl;

export const test = async () => post(
  `${API_URL}/test`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: await tokenStorage.getToken(),
  },
  JSON.stringify({ }),
);

export const testTwo = () => null;
