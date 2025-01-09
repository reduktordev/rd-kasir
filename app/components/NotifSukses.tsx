import { Text, TouchableOpacity, View } from "react-native";

export default function NotifSukses (){
    return(
        <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 20,
                    }}>
                    <View style={{ width: "100%", gap: 14 }}>
                        <Text
                            style={{ fontSize: 24, fontWeight: "bold", color: "green" }}>
                            Peringatan!
                        </Text>
                        <Text style={{ fontSize: 20 }}>Transaksi Tersimpan</Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                        }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "green",
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
                                Ok
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
    )
}