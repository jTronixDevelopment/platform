var Firebase  = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");
require("firebase/storage");

Firebase.initializeApp({
  apiKey: "AIzaSyAuYLb2L0qafKyxZdkUw1qVp46ffpig_EY",
  authDomain: "mongotest-11a55.firebaseapp.com",
  databaseURL: "https://mongotest-11a55.firebaseio.com/",
  storageBucket: "mongotest-11a55.appspot.com"
});

export { Firebase };
