import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen({ route }: any) {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <Text>AboutScreen: {route.params.id}</Text>
      <Button
        title="Product"
        onPress={() => navigation.navigate("Product", { id: 2 })}
      />
      <Button
        title="Back to Home"
        onPress={() => navigation.popTo("Home", { id: 1 })}
      />
    </SafeAreaView>
  );
}
