import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    Modal,
    TouchableOpacity,
} from "react-native";

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
    image: string;
}

interface BarangKategoriModalProps {
    visible: boolean;
    onClose: () => void;
}

const products: Product[] = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        category: "Snack",
        stock: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
    },
    {
        id: 2,
        name: "Product 2",
        price: 12.49,
        category: "Snack",
        stock: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
    },
];

const BarangKategoriModal = ({
    visible,
    onClose,
}: BarangKategoriModalProps) => {
    const renderItem = ({ item }: { item: Product }) => (
        <View
            style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                padding: 16,
                marginBottom: 12,
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
                alignItems: "center",
            }}>
            <View
                style={{
                    width: "40%",
                    height: "60%",
                    borderRadius: 8,
                    marginRight: 16,
                }}>
                <Image
                    source={{ uri: item.image }}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 8,
                        marginRight: 16,
                    }}
                />
            </View>

            <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#333",
                        marginBottom: 0,
                    }}>
                    {item.name}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: "#666",
                        marginBottom: 0,
                    }}>
                    {item.category}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: "#666",
                        marginBottom: 0,
                    }}>
                    {item.stock}
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000",
                    }}>
                    ${item.price.toFixed(2)}
                </Text>
            </View>
        </View>
    );

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View
                    style={{
                        width: "90%",
                        backgroundColor: "white",
                        borderRadius: 10,
                        padding: 16,
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-between",
                            paddingVertical: 24,
                            borderBottomWidth: 1,
                            borderBottomColor: "#ddd",
                            marginBottom: 16,
                        }}>
                        <View style={{ flexDirection: "row", gap: 12, alignItems: "center", justifyContent: "center" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    name="chevron-left"
                                    size={24}
                                    onPress={onClose}
                                />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: "black",
                                    fontWeight: "bold",
                                }}>
                                Category
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <MaterialIcons name="add-circle" size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{
                            paddingBottom: 16,
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default BarangKategoriModal;
