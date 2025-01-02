import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function IncomeCard() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    width: 300,
                    borderRadius: 5,
                    overflow: "hidden",
                }}
            >
                <LinearGradient
                    colors={["#C21D03", "#FD5732"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingHorizontal: 15,
                        gap: 8,
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>Income</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            marginBottom: 6,
                        }}
                    >
                        <Text style={{ fontSize: 14, color: "white" }}>RP. 2.000.000</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
