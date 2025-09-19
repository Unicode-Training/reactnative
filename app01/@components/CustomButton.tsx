import { DemoContext } from "@/app/demo";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
  children: React.ReactNode;
  color?: "red" | "blue" | "green" | "gray";
  size?: "small" | "medium" | "large";
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
};
export default function CustomButton({
  children,
  color,
  size = "medium",
  onPress,
  onPressIn,
  onPressOut,
}: Props) {
  const textColor = {
    red: "white",
    blue: "white",
    green: "white",
    gray: "#333",
  };
  const sizeMap = {
    small: 10,
    medium: 15,
    large: 20,
  };
  const textSizeMap = {
    small: 10,
    medium: 15,
    large: 20,
  };
  const context = useContext(DemoContext);
  console.log(context);
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[
          styles.button,
          color && { backgroundColor: color },
          { padding: sizeMap[size] },
        ]}
      >
        <Text
          style={[
            color && { color: textColor[color] },
            { fontSize: textSizeMap[size] },
          ]}
        >
          {children}
        </Text>
        <Text>{context.message}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ddd",
    padding: 10,
  },
});
