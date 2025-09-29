import { View, Text } from "react-native";
import React from "react";
import { useFocusEffect } from "expo-router";
import { instance } from "@/libs/axios";

export default function Order() {
  useFocusEffect(() => {
    const getProfile = async () => {
      try {
        const response = await instance.get(`/auth/profile`);
        console.log("order: ", response?.data);
      } catch {}
    };
    getProfile();
  });
  return (
    <View>
      <Text>Order</Text>
    </View>
  );
}
