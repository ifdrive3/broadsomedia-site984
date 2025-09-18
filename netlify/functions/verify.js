// netlify/functions/verify.js
// Simple verification endpoint — returns verification token for third-party checks.
// Use only for low-sensitivity verification tasks.

exports.handler = async function (event) {
  const { queryStringParameters = {} } = event;
  if (queryStringParameters.token) {
    return { statusCode: 200, body: queryStringParameters.token };
  }
  return { statusCode: 400, body: "missing token" };
};
