import { View, Text } from "react-native";
import React from "react";

export default function AboutScreen() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        about
      </Text>
    </View>
  );
}
