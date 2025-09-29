import { View, Text, FlatList } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const DATA = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
];
export default function ProductIndexScreen() {
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>Products</Text>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 20 }}>{item.name}</Text>
              <Link
                href={{
                  pathname: "/products/[id]",
                  params: { id: item.id },
                }}
              >
                Chi tiết
              </Link>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
