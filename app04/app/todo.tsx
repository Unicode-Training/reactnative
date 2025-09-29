import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList } from "@/store/slice/todo";

export default function TodoScreen() {
  const dispatch: any = useDispatch();
  const { todoList, status, error } = useSelector((state: any) => state.todo);
  console.log(status);
  console.log(error);

  useEffect(() => {
    dispatch(getTodoList());
  }, []);
  if (status === "error") {
    return (
      <View>
        <Text style={{ fontSize: 30 }}>Error: {error}</Text>
      </View>
    );
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          marginBlock: 15,
          textAlign: "center",
        }}
      >
        Todo List App
      </Text>
      {status === "pending" ? (
        <Text style={{ fontSize: 20 }}>Loading...</Text>
      ) : (
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <Text
              style={{
                fontSize: 20,
                marginBlock: 10,
              }}
            >
              {item.title}
            </Text>
          )}
        />
      )}
    </View>
  );
}
