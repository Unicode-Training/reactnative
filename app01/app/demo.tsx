import CustomButton from "@/@components/CustomButton";
import Item from "@/@components/Item";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export const DemoContext = React.createContext({});
export default function DemoScreen() {
  const [message, setMessage] = useState("Xin chào anh em");
  const handlePress = () => {
    console.log("Press");
  };
  const handlePressIn = () => {
    console.log("PressIn");
  };
  const handlePressOut = () => {
    console.log("PressOut");
  };
  return (
    <SafeAreaView>
      <DemoContext.Provider value={{ message, setMessage }}>
        <Text style={styles.text}>Demo</Text>
        <CustomButton
          color="red"
          size="large"
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          Touch me
        </CustomButton>
        <Item />
      </DemoContext.Provider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

//Context:
// - Đối tượng context: React.createContext
// - Provider: --> Component bọc các component muốn chia sẻ dữ liệu
// - Consumer: --> Component dùng để đọc dữ liệu từ context
// Giải pháp khác: useContext
