import { Text, TouchableOpacity, View } from "react-native";

export default function Total() {
    return (
        <View
            style={{
                width: "100%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 16,
            }}>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                    }}>
                    Total
                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                    }}>
                    Rp. 35.000
                </Text>
            </View>

            <TouchableOpacity
                style={{
                    width: "100%",
                    backgroundColor: "red",
                    padding: 16,
                    borderRadius: 5,
                    marginTop: 16,
                }}
            >
              <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontWeight: "bold" }}>
                Confirm
              </Text>
            </TouchableOpacity>
        </View>
    );
}
