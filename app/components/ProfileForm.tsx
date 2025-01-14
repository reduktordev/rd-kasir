import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function ProfileForm() {
    return (
        <View
            style={{
                flexDirection: "column",
                padding: 16,
                gap: 12,
                top: "-25%",
                zIndex: 10,
                backgroundColor: "white",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
                paddingBottom: 56,
            }}>
            <View style={{ flexDirection: "column", gap: 12 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: "medium" }}>
                        Username
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "ultralight" }}>
                        Change
                    </Text>
                </View>
                <TouchableOpacity>
                    <TextInput
                        placeholder="[name]"
                        editable={false}
                        accessible={false}
                        style={{
                            borderWidth: 1,
                            borderColor: "black",
                            borderRadius: 5,
                            height: 50,
                            padding: 8,
                        }}></TextInput>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", gap: 12 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: "medium" }}>
                        Password
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "ultralight" }}>
                        Change
                    </Text>
                </View>
                <TouchableOpacity>
                    <TextInput
                        placeholder="*****"
                        editable={false}
                        accessible={false}
                        style={{
                            borderWidth: 1,
                            borderColor: "black",
                            borderRadius: 5,
                            height: 50,
                            padding: 8,
                        }}></TextInput>
                </TouchableOpacity>
            </View>
        </View>
    );
}
