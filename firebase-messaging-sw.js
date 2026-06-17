importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Must match the exact config from your index.html
firebase.initializeApp({
  apiKey: "AIzaSyCZVe4wuhnXD4vs5NxSz9yhKtzNpa6Sivg",
  authDomain: "science-ix-87252.firebaseapp.com",
  projectId: "science-ix-87252",
  storageBucket: "science-ix-87252.firebasestorage.app",
  messagingSenderId: "387959998990",
  appId: "1:387959998990:web:83e19bec709349035cca5f",
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
