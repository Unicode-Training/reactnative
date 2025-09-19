import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

export default function Message() {
  const isFocus = useIsFocused();
  console.log(isFocus ? "message active" : "");
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}
