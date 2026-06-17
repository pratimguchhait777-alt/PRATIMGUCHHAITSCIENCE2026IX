importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Must match your configuration perfectly
const firebaseConfig = {
  apiKey: "AIzaSyCZVe4wuhnXD4vs5NxSz9yhKtzNpa6Sivg",
  authDomain: "science-ix-87252.firebaseapp.com",
  projectId: "science-ix-87252",
  storageBucket: "science-ix-87252.firebasestorage.app",
  messagingSenderId: "387959998990",
  appId: "1:387959998990:web:753ed5aeb94f79235cca5f",
  measurementId: "G-BJ5SSGX74L"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Catches messages in the background while the browser tab is shut
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
