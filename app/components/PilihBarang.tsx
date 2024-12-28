import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Modal,
    Button,
} from "react-native";
import Barang from "./Barang";

const Pilihbarang = () => {
    const [selectedBarang, setSelectedBarang] = useState<string | null>(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const handlePilihBarangClick = (barang: string) => {
        setSelectedBarang(barang === selectedBarang ? null : barang);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View
            style={{
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
                gap: 12,
                padding: 15,
            }}>
            <TouchableOpacity onPress={() => handlePilihBarangClick("barang1")}>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                    Pilih Barang 1
                </Text>
            </TouchableOpacity>
            <TextInput
                style={{
                    width: "100%",
                    height: 50,
                    borderColor: "gray",
                    borderWidth: 2,
                    borderRadius: 5,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    backgroundColor: "white",
                }}
                placeholder="Pilih Barang 1"
            />

            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseModal}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", 
                    }}>
                    <View
                        style={{
                            width: "100%",
                            backgroundColor: "white",
                            paddingHorizontal: 10,
                            paddingVertical: 50,
                            borderRadius: 10,
                            elevation: 5,
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "500",
                                marginBottom: 10,
                            }}>
                            {selectedBarang
                                ? selectedBarang === "barang1"
                                    ? "Barang 1"
                                    : "Barang 2"
                                : "No Barang Selected"}
                        </Text>
                        <Barang />
                        <Button title="Close" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Pilihbarang;
