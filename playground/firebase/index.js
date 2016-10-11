import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCaKvOgcX17nkcSgW-Iynp5bfmtLF8q4zQ",
    authDomain: "upshur-todo-app.firebaseapp.com",
    databaseURL: "https://upshur-todo-app.firebaseio.com",
    storageBucket: "upshur-todo-app.appspot.com",
    messagingSenderId: "25623470448"
  };
  firebase.initializeApp(config);

var firebaseRef =  firebase.database().ref();

firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Andre',
      age: 28
    }
  });

var TodosRef = firebaseRef.child('todos');

TodosRef.on('child_added', (snapshot) => {
  console.log('New todo added',snapshot.key, snapshot.val());
});

TodosRef.push({
  text: 'Finish React Course'
});

TodosRef.push({
  text: 'Wash the dishes'
});
