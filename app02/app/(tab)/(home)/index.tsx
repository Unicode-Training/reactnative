import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";

export default function HomeTabScreen() {
  // const navigation = useNavigation<any>();
  const router = useRouter();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Home Tab Screen</Text>
      <Button
        title="Open user"
        onPress={() => {
          // navigation.navigate("[user]", { user: "hoanganunicode" })
          router.push(`/hoanganunicode`);
        }}
      />
    </View>
  );
}
