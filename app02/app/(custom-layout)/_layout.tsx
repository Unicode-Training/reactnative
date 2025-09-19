import { View, Text } from "react-native";
import React from "react";
import Heading from "./Heading";
import { Slot } from "expo-router";

export default function ProductLayout() {
  return (
    <View>
      <Heading />
      <Slot />
    </View>
  );
}
