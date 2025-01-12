import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddModal from "./AddKategoriModal";
import AddKategoriModal from "./AddKategoriModal";

// Array for categories
const categories = [
    {
        id: 1,
        name: "Snack",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
    },
    {
        id: 2,
        name: "Drink",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
    },
];

export default function Kategori() {
    const [modalVisible, setModalVisible] = useState(false);

    const addCategory = (newCategory) => {
        categories.push({
            id: categories.length + 1,
            ...newCategory,
        });
        setModalVisible(false);
    };

    return (
        <View style={{ gap: 16 }}>
            {/* Header */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Kategori</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Icon name="add-circle" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Category List */}
            <View style={{ padding: 16, gap: 16 }}>
                {categories.map((category) => (
                    <View
                        key={category.id}
                        style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            borderRadius: 5,
                            padding: 12,
                        }}
                    >
                        <Image
                            source={{ uri: category.image }}
                            style={{ width: 80, height: 50, marginRight: 10 }}
                        />
                        <Text style={{ fontSize: 20 }}>{category.name}</Text>
                        <Icon name="chevron-right" size={20} />
                    </View>
                ))}
            </View>

            {/* Add Modal */}
            <AddKategoriModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onAdd={addCategory}
            />
        </View>
    );
}
