/* @flow */

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_ENV_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_ENV_PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || 8080,
  DISABLE_SSR: process.env.DISABLE_SSR || false,
  BASE_PATH: process.env.BASE_PATH || '/',
  PRIVATEGRIFFE_API_ENDPOINT:
    process.env.PRIVATEGRIFFE_API_ENDPOINT || 'https://gundamapi.privategriffe.com',
  FACTFINDER_TEST: process.env.FACTFINDER_TEST || 'true',
  GTM_ID: process.env.GTM_ID || 'GTM-KGJJSNZ',
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || '245517245536601',
};
