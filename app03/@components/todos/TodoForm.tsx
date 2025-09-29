import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { use, useState } from "react";
import { StoreContext } from "@/store/StoreProvider";

export default function TodoForm() {
  const [value, setValue] = useState<string>("");
  const store = use(StoreContext);
  if (!store) {
    return;
  }
  const { dispatch } = store;
  const handleChange = (value: string) => {
    setValue(value);
  };
  const handleAdd = () => {
    if (!value.trim()) {
      Alert.alert("Error", "Please enter a todo");
      return;
    }
    dispatch({
      type: "todo/add",
      payload: value,
    });
    setValue("");
  };
  return (
    <View
      style={{
        padding: 20,
        flexDirection: "row",
      }}
    >
      <TextInput
        placeholder="Enter your todo"
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "gray",
          padding: 10,
          flex: 1,
        }}
        onChangeText={handleChange}
        value={value}
      />
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10,
        }}
        onPress={handleAdd}
      >
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
