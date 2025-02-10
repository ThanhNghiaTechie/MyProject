import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>

            <Image
                source={require('../../assets/image/checklist.png')}
                style={styles.image}
            />

            {/* Welcome Back Text */}
            <Text style={styles.welcomeText}>Welcome Back</Text>

            {/* Email TextInput */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            {/* Password TextInput */}
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            {/* Quên mật khẩu */}
            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
            </TouchableOpacity>

            {/* Đăng nhập Button */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F4EB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 50,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#D9D9D9',
        paddingLeft: 20,
        marginBottom: 20,
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginBottom: 30,
    },
    forgotPasswordText: {
        color: '#FF6347',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#FF6347',
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 20,
        height: 20
    }
});

export default App;
