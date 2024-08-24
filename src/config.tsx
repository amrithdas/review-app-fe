const baseURL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_PROD_ENDPOINT
  : process.env.REACT_APP_DEV_ENDPOINT;

export default baseURL;