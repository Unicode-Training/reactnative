import { useCounter } from "@/store";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Index() {
  const { count, increment, decrement }: any = useCounter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Count: {count}</Text>
      <Button title="Decrement" onPress={() => decrement(10)} />
      <Button title="Increment" onPress={() => increment(5)} />
      <Button
        title="Update Storage"
        onPress={async () => {
          await AsyncStorage.setItem("my-color", "red");
          await AsyncStorage.setItem("my-settings", "ok");
        }}
      />
      <Button
        title="Get Storage"
        onPress={async () => {
          // const data = await AsyncStorage.getItem("my-color");
          // console.log(data);
          const data = await AsyncStorage.getAllKeys();
          console.log(data);
        }}
      />
      <Button
        title="remove Storage"
        onPress={async () => {
          // const data = await AsyncStorage.removeItem("my-color");
          // console.log(data);
          // const data = await AsyncStorage.clear();
          // console.log(data);
          await AsyncStorage.multiRemove(["my-color", "my-settings"]);
        }}
      />
    </View>
  );
}
