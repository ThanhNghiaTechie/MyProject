// App.js

import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Alert, Button } from 'react-native';
import { getDatabase, ref, set } from "firebase/database";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBk0olJu3BqQH__LPFT_CU76AAO1dcdEaE",
    authDomain: "apporder-88b1c.firebaseapp.com",
    projectId: "apporder-88b1c",
    storageBucket: "apporder-88b1c.firebasestorage.app",
    messagingSenderId: "557695896690",
    appId: "1:557695896690:web:ae73754cdf5f55e9e706eb",
    measurementId: "G-6JH9Y6LN8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function guidulieu(): void {
    const db = getDatabase();
    set(ref(db, 'Địa chỉ gửi lên'), { tenbien: "Giá trị gửi lên" });
}

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.helloText}>Hello</Text>

            <Button
                onPress={guidulieu}
                title=' Tên nút bấm'
                color="red"

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    helloText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default App;
