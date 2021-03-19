var admin = require("firebase-admin");

var serviceAccount = require("./mobile-17f28-firebase-adminsdk-pvg7t-351d6d5327.json");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.sendNotif = (token, title, body, navs)=>{
  const notif = firebase.messaging()
  notif.sendToDevice(token, {
    notification: {
      title,
      body,
    },
    data: {
      navigation: navs
    }
  })
}
