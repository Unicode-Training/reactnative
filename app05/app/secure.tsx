import { View, Text, Button } from "react-native";
import React from "react";
import * as SecureStore from "expo-secure-store";
export default function SecureScreen() {
  return (
    <View>
      <Text>secure</Text>
      <Button
        title="Update Secure"
        onPress={async () => {
          await SecureStore.setItemAsync("token", "ahihi");
        }}
      />
      <Button
        title="Read Secure"
        onPress={async () => {
          let result = await SecureStore.getItemAsync("token");
          console.log(result);
        }}
      />
      <Button
        title="Remove Secure"
        onPress={async () => {
          let result = await SecureStore.deleteItemAsync("token");
          console.log(result);
        }}
      />
    </View>
  );
}
