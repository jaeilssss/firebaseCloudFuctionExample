const functions = require("firebase-functions");
const {RtcTokenBuilder, RtcRole} = require("agora-access-token");
const APP_ID = "65b9a66d547a48f78cb3168e17d6867b";
const APP_CERTIFICATE = "fb313b9dc3254c72acb28ca1264d8295";
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
