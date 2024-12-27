import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Balance() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
                style={{
                    flexDirection: "column",
                    width: 300,
                    backgroundColor: "red",
                    borderColor: "red",
                    borderWidth: 1,
                    paddingTop: 15,
                    paddingBottom: 30,
                    paddingHorizontal: 15,
                    gap: 8,
                    borderRadius: 5,
                }}>
                <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>Balance</Text>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 10,
                        marginBottom: 6,
                    }}>
                    <Text style={{ fontSize: 14, color: "white", marginLeft: 0 }}>
                        Total Penjualan : 
                    </Text>
                    <Text style={{ fontSize: 14, color: "white", marginRight: 0 }}>
                        RP. 2.000.000
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 10,
                        marginBottom: 6,
                    }}>
                    <Text style={{ fontSize: 14, color: "white", marginLeft: 0 }}>
                        Total Transaksi : 
                    </Text>
                    <Text style={{ fontSize: 14, color: "white", marginRight: 0 }}>
                        30
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 10,
                        marginBottom: 6,
                    }}>
                    <Text style={{ fontSize: 14, color: "white", marginLeft: 0 }}>
                        Total Keuntungan : 
                    </Text>
                    <Text style={{ fontSize: 14, color: "white", marginRight: 0 }}>
                        RP. 500.000
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
