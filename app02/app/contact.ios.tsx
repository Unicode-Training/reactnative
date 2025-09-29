import { View, Text, Button } from "react-native";
import React from "react";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Link } from "expo-router";
export default function ContactScreen() {
  const handleOpenUrl = () => {
    WebBrowser.openBrowserAsync("https://online.unicode.vn");
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Contact iOS
      </Text>
      <Button title="Open Url" onPress={handleOpenUrl} />
      <Link href={"https://vnexpress.net"}>Open Vnexpress</Link>
    </View>
  );
}
