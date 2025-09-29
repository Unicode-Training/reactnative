import { Redirect } from "expo-router";
import { View, Text } from "react-native";

export default function ProfileIndex() {
  return <Redirect href={"/profile"} />;
}
