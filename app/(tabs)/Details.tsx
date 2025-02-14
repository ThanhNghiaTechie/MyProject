import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import HomeScreen from './HomeScreen'; // Import HomeScreen

const Details = ({ navigation }: any) => {  // Đảm bảo kiểu navigation đúng khi sử dụng TypeScript
    return (
        <View style={styles.container}>
            <Text>Hello from Details Screen!</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Details;
