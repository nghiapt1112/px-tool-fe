import axios from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from "./config";


const instance = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  }
});

if (localStorage.getItem('access_token')) {
  axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('access_token')}`;
}

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  console.log('Error', error)
  if (error.response) {
    const { response: { data } } = error;
    return Promise.reject(data.message || 'A server error occurred. Please contact the administrator.');
  }
  return Promise.reject(error);
});

export const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
}

export default instance;
