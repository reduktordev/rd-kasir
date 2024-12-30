import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Kategori() {
    return (
        <View style={{ padding: 16, gap: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold"}}>Kategori</Text>
            <View style={{ gap: 16 }}>
                <View
                    style={{
                        width: "100%", 
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        borderRadius: 5,
                        padding: 12,
                    }}>
                    <Image
                        source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
                        }}
                        style={{ width: 80, height: 50, marginRight: 10 }}
                    />
                    <Text style={{fontSize: 20,}}>Snack</Text>
                    <Icon name="chevron-right" size={20}></Icon>
                </View>
                <View
                    style={{
                        width: "100%", 
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        borderRadius: 5,
                        padding: 12,
                    }}>
                    <Image
                        source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
                        }}
                        style={{ width: 80, height: 50, marginRight: 10 }}
                    />
                    <Text style={{fontSize: 20,}}>Drink</Text>
                    <Icon name="chevron-right" size={20}></Icon>
                </View>
            </View>
        </View>
    );
}
