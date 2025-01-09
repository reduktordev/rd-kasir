import React from "react";
import { FlatList, Text, View } from "react-native";

interface Transaction {
    id: string;
    productName: string;
    category: string;
    quantity: number;
    price: string;
}

const transactionData: Transaction[] = [
    { id: "1", productName: "Laptop", category: "Electronics", quantity: 1, price: "RP. 15.000.000" },
    { id: "2", productName: "Mouse", category: "Accessories", quantity: 2, price: "RP. 300.000" },
    { id: "3", productName: "Keyboard", category: "Accessories", quantity: 1, price: "RP. 800.000" },
    { id: "4", productName: "Monitor", category: "Electronics", quantity: 1, price: "RP. 2.500.000" },
];

export default function DaftarTransaksi() {
    const renderItem = ({ item }: { item: Transaction }) => (
        <View
            style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderColor: "black",
                padding: 8,
            }}>
            <View style={{ flexDirection: "row", gap: 16 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.id}</Text>
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.productName}
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "300" }}>
                        {item.category}
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>
                        Quantity: {item.quantity}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "right",
                    }}>
                    {item.price}
                </Text>
            </View>
        </View>
    );

    const ListHeaderComponent = () => (
        <View
            style={{
                width: "100%",
                paddingVertical: 24,
            }}>
            <Text
                style={{
                    fontSize: 17,
                    color: "black",
                    fontWeight: "bold",
                }}>
                Daftar Transaksi
            </Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList<Transaction>
                data={transactionData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={ListHeaderComponent}
                contentContainerStyle={{
                    padding: 15,
                }}
                scrollEnabled={true}
                nestedScrollEnabled={true}
                style={{ width: "100%" }}
            />
        </View>
    );
}