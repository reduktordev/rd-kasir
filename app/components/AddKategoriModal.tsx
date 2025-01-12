import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
    Modal,
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function AddKategoriModal({ visible, onClose, onAdd }) {
    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState("");

    const handleAdd = () => {
        if (categoryName.trim() && categoryImage.trim()) {
            onAdd({ name: categoryName, image: categoryImage });
            setCategoryName("");
            setCategoryImage("");
        } else {
            alert("Please fill out all fields");
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flexDirection: "row", alignItems:"center", gap: 12 }}>
                            <TouchableOpacity>
                                <Icon name="chevron-left" size={24} onPress={onClose} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                Tambah Kategori
                            </Text>
                        </View>

                        <TextInput
                            placeholder="Category Name"
                            style={styles.input}
                            value={categoryName}
                            onChangeText={setCategoryName}
                        />
                        <TextInput
                            placeholder="Image URL"
                            style={styles.input}
                            value={categoryImage}
                            onChangeText={setCategoryImage}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: 16,
                            }}>
                            <TouchableOpacity style={{ width: "70%", borderRadius: 8}} onPress={handleAdd}>
                                <LinearGradient
                                                    colors={["#C21D03", "#FD5732"]}
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 1, y: 1 }}
                                                    style={{
                                                        paddingTop: 12,
                                                        paddingBottom: 12,
                                                        paddingHorizontal: 15,
                                                        gap: 8,
                                                        borderRadius: 5,
                                                        justifyContent:"center",
                                                        alignItems:"center"
                                                    }}
                                                >


                                <Text style={{ color: "white", fontWeight: "bold", justifyContent:"center", alignItems:"center" }}>ADD</Text>
                                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "100%",
        height: "70%",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
});
