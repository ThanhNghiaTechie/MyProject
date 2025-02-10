import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, FlatList, Dimensions, Image, Modal } from 'react-native';

const App = () => {
    const [text, setText] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    // Tạo một mảng dữ liệu giả lập cho danh sách món ăn với giá tiền ngẫu nhiên
    const data = Array.from({ length: 20 }, (_, index) => ({
        name: `Món ${index + 1}`,
        price: (Math.random() * (100000 - 10000) + 10000).toFixed(0), // Giá ngẫu nhiên từ 10,000 đến 100,000
    }));

    // Lấy chiều cao màn hình
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text
                    style={{ padding: 20 }}
                >Bàn số 4 đặt 2 bánh mì chảo</Text>
                <Image
                    source={require('../../assets/image/thongbao.png')}
                    style={{
                        width: 50, height: 50, marginLeft: 'auto',
                        marginRight: 30,
                    }}
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Bạn cần tìm món gì ?"
                value={text}
                onChangeText={setText}
            />

            {<FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>{item.name}</Text>
                        <Text style={styles.priceText}>Giá: {item.price} VNĐ</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}  // Sử dụng 2 cột
                columnWrapperStyle={styles.columnWrapper} // Căn chỉnh khoảng cách giữa các cột
                contentContainerStyle={styles.flatListContentContainer}
                style={{ height: screenHeight / 1.8 }}
            />}
            {/* Hàng chữ A B C D */}
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../assets/image/home.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../assets/image/checklist.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../assets/image/checklist.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../assets/image/Profile.png')}
                    style={styles.image}
                />
            </View>

        </View>


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
    bottomRow: {
        flexDirection: 'row', // Sắp xếp các chữ theo hàng ngang
        justifyContent: 'space-evenly', // Căn đều các chữ cái
        width: '80%', // Chiếm 80% chiều rộng màn hình
        marginTop: 20, // Khoảng cách từ FlatList
    },
    bottomText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    image: {
        height: 30,
        width: 30,
    }
});

export default App;
