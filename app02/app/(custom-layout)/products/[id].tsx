import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const url = Linking.createURL(`products/${id}`);
  console.log("ProductDetailScreen", url);

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>ProductDetail: {id}</Text>
      </View>
    </SafeAreaView>
  );
}
