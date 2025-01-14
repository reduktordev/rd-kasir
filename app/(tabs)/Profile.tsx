import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    GestureHandlerRootView,
    ScrollView,
} from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import Navbar from "../components/Navbar";
import ProfileForm from "../components/ProfileForm";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Profile() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={tw`flex-1`}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView
                    contentContainerStyle={tw`flex-grow bg-gray-100`}
                    keyboardShouldPersistTaps="handled">
                    <View>
                        <Navbar />
                    </View>
                    <View style={tw`mb-4`}>
                        <LinearGradient
                            colors={["#C21D03", "#FD5732"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{
                                paddingTop: 12,
                                paddingBottom: 12,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <View
                                style={{
                                    width: "100%",
                                    flexDirection: "column",
                                    padding: 24,
                                }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: 8,
                                        alignItems: "center",
                                    }}>
                                    <TouchableOpacity>
                                        <Icon
                                            name="chevron-left"
                                            size={24}
                                            color={"white"}
                                        />
                                    </TouchableOpacity>
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: 16,
                                        }}>
                                        Back
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "column",
                                        gap: 16,
                                        alignItems: "center",
                                        top: -24,
                                    }}>
                                    <Icon
                                        name="account-circle"
                                        size={50}
                                        color={"white"}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 17,
                                            fontWeight: "semibold",
                                            color: "white",
                                        }}>
                                        Hello [Admin Name]
                                    </Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ paddingHorizontal: 28, paddingVertical: 8 }}>
                        <ProfileForm />
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center", marginBottom: 16}}>
                        <TouchableOpacity
                            style={{ width: "70%", borderRadius: 8 }}>
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
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                <Text
                                    style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                    Log Out
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </GestureHandlerRootView>
    );
}
