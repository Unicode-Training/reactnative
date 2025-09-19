import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

export default function Feed() {
  const isFocus = useIsFocused();
  console.log(isFocus ? "feed active" : "");

  return (
    <View>
      <Text>Feed</Text>
    </View>
  );
}
