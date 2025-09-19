import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-get-random-values";
import { SafeAreaView } from "react-native-safe-area-context";
import { v4 as uuid } from "uuid";
type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleAdd = () => {
    let error = "";
    if (!title) {
      error = "Please fill title";
    }
    setError(error);
    if (error) {
      return;
    }
    const todo = {
      id: uuid(),
      title,
      completed: false,
    };
    setTodoList([...todoList, todo]);
    setTitle("");
    Keyboard.dismiss();
  };
  const handleRemove = (id: string) => {
    Alert.alert("Delete", "Are you sure?", [
      {
        text: "Cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setTodoList(todoList.filter((item) => item.id !== id));
        },
      },
    ]);
  };
  const handleCompleted = (id: string, completed: boolean) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.heading}>Todo List App</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Checkbox
                value={item.completed}
                onValueChange={(status) => handleCompleted(item.id, status)}
              />
              <Text
                style={[styles.itemText, item.completed && styles.completed]}
                onPress={() => handleCompleted(item.id, !item.completed)}
              >
                {item.title}
              </Text>
              <FontAwesome
                name="remove"
                size={24}
                color="red"
                onPress={() => handleRemove(item.id)}
              />
            </View>
          )}
          automaticallyAdjustKeyboardInsets
        />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name..."
            onChangeText={setTitle}
            value={title}
          />

          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    padding: 20,
  },
  container: {
    paddingInline: 15,
    flex: 1,
  },
  item: {
    padding: 15,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 20,
    marginRight: "auto",
  },
  form: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    flex: 1,
    paddingInline: 10,
    paddingBlock: 5,
  },
  button: {
    backgroundColor: "green",
    color: "white",
    paddingBlock: 5,
    paddingInline: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    color: "#fff",
  },
  error: {
    width: "100%",
    color: "red",
  },
  completed: {
    textDecorationLine: "line-through",
  },
});
