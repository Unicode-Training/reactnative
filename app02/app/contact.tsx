import { View, Text, Button } from "react-native";
import React from "react";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Link } from "expo-router";
export default function ContactScreen() {
  const handleOpenUrl = () => {
    // Linking.openURL("https://online.unicode.vn");
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
        Contact Android
      </Text>
      <Button title="Open Url" onPress={handleOpenUrl} />
      <Link href={"https://vnexpress.net"}>Open Vnexpress</Link>
      <Link href={"mailto:hoangan.web@gmail.com"}>Open Email</Link>
      <Link href={"tel:0394822896"}>Call</Link>
      <Link href={"sms:0394822896"}>Send Sms</Link>
      <Link href={"tg://"}>Telegram</Link>
      <Link href={"https://zalo.me/0394822896"}>Zalo</Link>
    </View>
  );
}
