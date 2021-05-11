const functions = require("firebase-functions");
const {RtcTokenBuilder, RtcRole} = require("agora-access-token");
const APP_ID = "";
const APP_CERTIFICATE = "5";
exports.generateToken = functions.https.onCall((data)=>{
  const channelName = data.channelName;
  const uid = data.uid;
  const role = RtcRole.SUBSCRIBER;
  const expireTime = data.expireTime;
  const currentTime = Math.floor(Date.now() / 1000);
  const privilegeExpireTime = currentTime + expireTime;
  const token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE,
      channelName, uid, role, privilegeExpireTime);
  return {"token": token};
});
