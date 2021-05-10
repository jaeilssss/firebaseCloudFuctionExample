const functions = require("firebase-functions");

exports.helloWorld2 = functions.https.onCall((data) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  const text = data.text;
  functions.logger.info("text logs!", text);
  return {text: "Hello from Firebase!"};
});
