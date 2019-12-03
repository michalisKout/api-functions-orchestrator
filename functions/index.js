const functions = require("firebase-functions");
const cvAppApi = require("cv-app-api");
const jsonServer = require("json-server");

cvAppApi.use(
  "/meetup/api",
  jsonServer.router(__dirname + "/__MOCK_MEETUP_API__/api.json")
);

exports.cvApp = functions.https.onRequest(cvAppApi);
