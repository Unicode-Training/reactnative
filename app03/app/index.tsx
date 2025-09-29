import { ContextType, StoreContext } from "@/store/StoreProvider";
import { use } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const store = use<ContextType | null>(StoreContext);

  if (!store) {
    return;
  }
  const { state, dispatch } = store;
  const handlePress = () => {
    dispatch({
      type: "demo/set-message",
      payload: "Chào anh em React Native",
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>
        Home Screen: {state.message as string}
      </Text>
      <Button title="Click me" onPress={handlePress} />
    </View>
  );
}
