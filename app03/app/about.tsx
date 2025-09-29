import { View, Text, Button } from "react-native";
import React, { use } from "react";
import { StoreContext } from "@/store/StoreProvider";

export default function AboutScreen() {
  const store = use(StoreContext);
  if (!store) {
    return;
  }
  const { state, dispatch } = store;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>
        About Screen: {state.message as string}
      </Text>
      <Button
        title="Remove Message"
        onPress={() =>
          dispatch({
            type: "demo/remove-message",
          })
        }
      />
    </View>
  );
}
