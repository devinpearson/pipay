/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  globee: {
    // API URL to be used in the client-side code
    clientUrl:
    process.env.GLOBEE_API_URL || 'https://test.globee.com/payment-api/v1',
    // API URL to be used in the server-side code
    clientKey: process.env.GLOBEE_API_KEY || `h6ao6fWJJdLINS6puNfBjUpRpZtaUsSE`,
  },

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
    process.env.API_SERVER_URL ||
    `http://localhost:${process.env.PORT || 3000}`,
  },
};
