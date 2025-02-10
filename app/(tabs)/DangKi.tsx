import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>


            {/* Title: Đăng ký */}
            <Text style={styles.welcomeText}>Đăng ký tài khoản</Text>

            {/* Email TextInput */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            {/* Mật khẩu TextInput */}
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            {/* Xác nhận mật khẩu TextInput */}
            <TextInput
                style={styles.input}
                placeholder="Xác nhận mật khẩu"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
            />

            {/* Điều khoản và chính sách */}

            <View style={styles.rowContainer}>
                <Text style={styles.termsText}>Đã có tài khoản? </Text>
                <Text style={styles.termsText}>Đăng nhập </Text>
            </View>

            {/* Đăng ký Button */}
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Đăng ký</Text>
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
    termsContainer: {
        alignSelf: 'flex-start',
        marginBottom: 30,
    },
    termsText: {
        color: '#FF6347',
        fontSize: 14,
    },
    registerButton: {
        backgroundColor: '#FF6347',
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',


    },
    rowContainer: {
        paddingEnd: 1,
        flexDirection: "row",
        justifyContent: "center",
        width: '50%',

    }
});

export default App;
