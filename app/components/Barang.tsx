import React from "react";
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from "react-native";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface BarangModalProps {
  visible: boolean;
  onClose: () => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "This is product 1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 12.49,
    description: "This is product 2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
  },
];

const Barang = ({ visible, onClose }: BarangModalProps) => {
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
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          marginRight: 16,
        }}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#333",
            marginBottom: 4,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#666",
            marginBottom: 8,
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          ${item.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 16,
          }}
        >
          <View
            style={{
              width: "100%",
              paddingVertical: 24,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Products
            </Text>
          </View>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              paddingBottom: 16,
            }}
          />
          <TouchableOpacity
            onPress={onClose}
            style={{
              backgroundColor: "#007BFF",
              paddingVertical: 12,
              borderRadius: 8,
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Barang;
