import { useCounter, useTodo } from "@/store";
import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
export default function TodoScreen() {
  const { todoList, status, getTodoList, error }: any = useTodo();
  const { count }: any = useCounter();
  useEffect(() => {
    getTodoList();
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
        Todo List App: {count}
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
