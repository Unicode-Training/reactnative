import React from "react";
import { Text, View } from "react-native";

export default function ProductScreen({ route }: any) {
  return (
    <View>
      <Text>ProductScreen: {route.params.id}</Text>
    </View>
  );
}
