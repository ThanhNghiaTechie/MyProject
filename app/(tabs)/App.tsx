import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, FlatList, Dimensions, Image, Modal, TouchableOpacity } from 'react-native';
import { getDatabase, ref, set } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import DangKy from './DangKi';
import DangNhap from './DangNhap';

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
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {

  }, [

  ])
  // Tạo một mảng dữ liệu giả lập cho danh sách món ăn với giá tiền ngẫu nhiên
  const data = Array.from({ length: 20 }, (_, index) => ({
    name: `Món ${index + 1}`,
    price: (Math.random() * (100000 - 10000) + 10000).toFixed(0),
  }));

  // Lấy chiều cao màn hình
  const screenHeight = Dimensions.get('window').height;

  // tạo constructor

  return (
    // < View style={styles.container} >
    //   <View style={{ flexDirection: 'row' }}>
    //     <Text
    //       style={{
    //         padding: 20,
    //         fontSize: 17,
    //         backgroundColor: 'green',
    //         borderRadius: 30,
    //       }}
    //     >Bàn số 4 đặt 2 bánh mì chảo</Text>
    //     <Image
    //       source={require('../../assets/image/thongbao.png')}
    //       style={{
    //         width: 50,
    //         height: 50,
    //         marginLeft: 'auto',
    //         marginRight: 30,
    //       }}
    //     />
    //   </View>

    //   <TextInput
    //     style={styles.input}
    //     placeholder="Bạn cần tìm món gì ?"
    //     value={text}
    //     onChangeText={setText}
    //   />

    //   <FlatList
    //     data={data}
    //     renderItem={({ item }) => (
    //       <View style={styles.buttonContainer}>
    //         <Text style={styles.buttonText}>{item.name}</Text>
    //         <Text style={styles.priceText}>Giá: {item.price} VNĐ</Text>
    //       </View>
    //     )}
    //     keyExtractor={(item, index) => index.toString()}
    //     numColumns={2} // Sử dụng 2 cột
    //     columnWrapperStyle={styles.columnWrapper} // Căn chỉnh khoảng cách giữa các cột
    //     contentContainerStyle={styles.flatListContentContainer}
    //     style={{ height: screenHeight / 1.8 }}
    //   />

    //   <View style={{
    //     flexDirection: 'row',
    //     width: '100%',
    //     justifyContent: 'space-between',
    //     padding: 20
    //   }}>
    //     <Image
    //       source={require('../../assets/image/home.png')}
    //       style={{ height: 50, width: 50 }}
    //     />
    //     <Image
    //       source={require('../../assets/image/checklist.png')}
    //       style={styles.image}
    //     />
    //     <Image
    //       source={require('../../assets/image/checklist.png')}
    //       style={styles.image}
    //     />

    //   </View>
    // </View >
    <DangNhap />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4EB',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    height: 55,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    width: '80%',
    paddingLeft: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: '#fefefe',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    width: '40%',
    height: 120, // Đủ chỗ cho cả tên món và giá
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 14,
    color: '#FF6347', // Màu đỏ cho giá tiền
    marginTop: 5,
  },
  flatListContentContainer: {
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between', // Giữ khoảng cách giữa các cột
    marginBottom: 10,  // Khoảng cách giữa các hàng
  },
  image: {
    height: 40,
    width: 40,
    justifyContent: 'space-between',
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  }
});

export default App;
