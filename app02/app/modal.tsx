import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function ModalScreen() {
  const isPresented = router.canGoBack();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isPresented && <Link href="../">Close Modal</Link>}
      <Text style={{ fontSize: 30 }}>Modal</Text>
    </View>
  );
}
