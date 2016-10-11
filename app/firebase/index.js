import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCaKvOgcX17nkcSgW-Iynp5bfmtLF8q4zQ",
      authDomain: "upshur-todo-app.firebaseapp.com",
      databaseURL: "https://upshur-todo-app.firebaseio.com",
      storageBucket: "upshur-todo-app.appspot.com",
      messagingSenderId: "25623470448"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef =  firebase.database().ref();
export default firebase;
