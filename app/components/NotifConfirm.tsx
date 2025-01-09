import { Button, Text, TouchableOpacity, View } from "react-native";

export default function NotifConfirm() {
    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
            }}>
            <View style={{ width: "100%", gap: 14 }}>
                <Text
                    style={{ fontSize: 24, fontWeight: "bold", color: "red" }}>
                    Peringatan!
                </Text>
                <Text style={{ fontSize: 20 }}>Konfirmasi Transaksi?</Text>
            </View>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        width: "40%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 4,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: "black",
                    }}>
                    <Text
                        style={{
                            color: "black",
                            fontSize: 24,
                            fontWeight: "medium",
                        }}>
                        Tidak
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: "red",
                        width: "40%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 4,
                        borderRadius: 8,
                    }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 24,
                            fontWeight: "medium",
                        }}>
                        Ya
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
