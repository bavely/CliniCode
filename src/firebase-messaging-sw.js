importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBSJrsFAT6LpGhl3SRLZqodDAeFarGg0g4",
    authDomain: "clinivoyapis.firebaseapp.com",
    databaseURL: "https://clinivoyapis.firebaseio.com",
    projectId: "clinivoyapis",
    storageBucket: "clinivoyapis.appspot.com",
    messagingSenderId: "335525545870",
    appId: "1:335525545870:web:315104e0d8d1bd7b6246df",
    measurementId: "G-QEK0W1LEK7"
});
const messaging = firebase.messaging();