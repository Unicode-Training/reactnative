import { DemoContext } from "@/app/demo";
import React, { useContext } from "react";
import { Text, View } from "react-native";
type DemoContextType = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};
export default function Heading() {
  const context = useContext(DemoContext) as DemoContextType;
  return (
    <View>
      <Text
        onPress={() => context.setMessage("Unicode")}
        style={{ fontSize: 30, paddingBlock: 20 }}
      >
        {context.message}
      </Text>
    </View>
  );
}
