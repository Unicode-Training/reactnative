import { View, Text, FlatList, Alert } from "react-native";
import React, { use } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { StoreContext } from "@/store/StoreProvider";

export default function TodoList() {
  const store = use(StoreContext);
  if (!store) {
    return null;
  }
  const { state, dispatch } = store;
  const handleRemove = (index: number) => {
    Alert.alert("Remove Todo", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          dispatch({
            type: "todo/remove",
            payload: index,
          });
        },
      },
    ]);
  };
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <FlatList
        data={state.todoList as string[]}
        renderItem={({ item, index }) => (
          <View
            style={{
              padding: 20,
              backgroundColor: "lightgray",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBlock: 10,
            }}
          >
            <Text style={{ marginRight: "auto" }}>{item}</Text>
            <EvilIcons
              name="trash"
              size={24}
              color="black"
              onPress={() => handleRemove(index)}
            />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}
