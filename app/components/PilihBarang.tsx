import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Barang from "./Barang";
import { useState } from "react";

export default function PilihBarang() {
  const [barangModalVisible, setBarangModalVisible] = useState(false);

  const handleBarangClick = () => {
    setBarangModalVisible(true);
  };

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        gap: 12,
        padding: 15,
      }}
    >
      {/* Button to open the Barang modal */}
      <TouchableOpacity onPress={handleBarangClick}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Pilih Barang 1</Text>
      </TouchableOpacity>

      {/* Input field */}
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

      {/* Barang Modal */}
      <Barang
        visible={barangModalVisible}
        onClose={() => setBarangModalVisible(false)}
      />
    </View>
  );
}
