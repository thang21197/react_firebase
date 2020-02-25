
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAGnumR3pIt66sZ62zUwpMJK6UvrsPhSk8",
    authDomain: "reactnotelist.firebaseapp.com",
    databaseURL: "https://reactnotelist.firebaseio.com",
    projectId: "reactnotelist",
    storageBucket: "reactnotelist.appspot.com",
    messagingSenderId: "929094039791",
    appId: "1:929094039791:web:233ce88ace69e25690831a",
    measurementId: "G-RWHGG3079B"
  };
  export const firebaseConnect=firebase.initializeApp(firebaseConfig);