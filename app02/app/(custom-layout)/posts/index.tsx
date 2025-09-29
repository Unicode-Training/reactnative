import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PostIndex() {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>Posts</Text>
      </View>
    </SafeAreaView>
  );
}
