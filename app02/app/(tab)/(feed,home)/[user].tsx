import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function UserScreen() {
  const { user } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>User: {user}</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
