import get from 'lodash/get';
import axios from 'axios';
import { inDevelopment, APIPORT } from '../../config/envs';

export const app = axios.create({
  baseURL: `http://localhost:${APIPORT}/api/`,
});

app.interceptors.response.use(
  response => response,
  error => {
    const err = get(error, ['response', 'data', 'err']);

    return err ? Promise.reject(err) : Promise.reject(error.message);
  },
);

export default app;

const error = {
  config: {
    transformRequest: {},
    transformResponse: {},
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
    method: 'get',
    baseURL: 'http://localhost:5000/api/',
    url: 'http://localhost:5000/api/users',
  },
  request: {},
  response: {
    data: {
      err: 'Route not setup',
    },
    status: 500,
    statusText: 'Internal Server Error',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    config: {
      transformRequest: {},
      transformResponse: {},
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      headers: {
        Accept: 'application/json, text/plain, */*',
      },
      method: 'get',
      baseURL: 'http://localhost:5000/api/',
      url: 'http://localhost:5000/api/users',
    },
    request: {},
  },
};
