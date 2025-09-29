import { View, Text } from "react-native";
import React from "react";
import * as Linking from "expo-linking";

export default function AboutScreen() {
  const url = Linking.createURL("about");
  console.log("AboutScreen", url);
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
