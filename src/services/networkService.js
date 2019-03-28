import axios from 'axios';

const parseResponse = async (response) => {
  let data = {};

  try {
    data = await response.data;
  } catch (e) { return null; }

  return data;
};

const request = async (method, url, headers, data) => axios({
  url, method, data, headers,
})
  .then(response => parseResponse(response));

export const get = (url, headers, params) => request('GET', url, headers, undefined, params);

export const post = (url, headers, data) => request('post', url, headers, data);

export const put = (url, headers, data) => request('PUT', url, headers, data);

export const del = (url, headers) => request('DELETE', url, headers);
