import { Slot } from "expo-router";
import { View } from "react-native";

export default function DynamicLayout({ segment }: { segment: string }) {
  return (
    <View
      style={{
        borderColor: segment === "(home)" ? "red" : "green",
        borderWidth: 1,
      }}
    >
      <Slot />
    </View>
  );
}
