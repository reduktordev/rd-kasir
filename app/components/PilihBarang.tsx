import { Text, TextInput, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Pilihbarang() {
    return (
        <View
            style={{
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
                gap: 12,
                padding: 15,
            }}>
            <Text style={{fontSize: 20, fontWeight: "500",}}>Pilih Barang</Text>
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
                placeholder="Pilih Barang 2"
            />
        </View>
    );
}
