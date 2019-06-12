import firebase from 'firebase'

export const appname = 'adv-react-cantor'

export const firebaseConfig = {
    apiKey: "AIzaSyCJRbWb8hLIOIMgYgxlTGBEzyfhBdGXhdQ",
    authDomain: `${appname}.firebaseapp.com`,
    databaseURL: `https://${appname}.firebaseio.com`,
    projectId: appname,
    storageBucket: `${appname}.appspot.com}`,
    messagingSenderId: "1036991481090",
    appId: "1:1036991481090:web:337013bc17321b55"
  };

firebase.initializeApp(firebaseConfig)