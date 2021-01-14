
var admin = require("firebase-admin");

var serviceAccount = require("../../firebase-credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin
