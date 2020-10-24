import * as firebase from 'firebase';
//import '@firebase/firestore';

const firebaseConfig={
        apiKey: "AIzaSyANWY-6KxBuRp0E98tGvO2bcwOd2EWsIZ4",
        authDomain: "recyclingapp-ca6de.firebaseapp.com",
        databaseURL: "https://recyclingapp-ca6de.firebaseio.com",
        projectId: "recyclingapp-ca6de",
        storageBucket: "recyclingapp-ca6de.appspot.com",
        messagingSenderId: "433591042613",
        appId: "1:433591042613:web:3e37b8bce4801422f4e77c",
        measurementId: "G-5N7997NE5P"

}

firebase.initializeApp(firebaseConfig);

export {firebase};