import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Press() {
  const insets = useSafeAreaInsets();
  console.log(insets);

  const handlePress = () => {
    console.log("Vừa click");
  };
  return (
    <ScrollView
      style={{
        paddingBottom: Math.max(insets.bottom, 16),
        paddingTop: Math.max(insets.top, 16),
      }}
    >
      <Text>press</Text>
      {/* <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handlePress}
        onPressIn={() => {
          console.log("Press IN");
        }}
        onPressOut={() => {
          console.log("Press OUT");
        }}
        // onLongPress={() => {
        //   console.log("Long Press");
        // }}
      >
        <Text>Click me</Text>
      </TouchableOpacity> */}
      <TouchableHighlight
        style={styles.button}
        onPress={handlePress}
        underlayColor={"#888787ff"}
        activeOpacity={0.9}
        onPressIn={() => {
          console.log("Press IN");
        }}
        onPressOut={() => {
          console.log("Press OUT");
        }}
        onLongPress={() => {
          console.log("Long Press");
        }}
      >
        <View>
          <Text>Click me</Text>
        </View>
      </TouchableHighlight>

      <Pressable
        style={({ pressed }) => {
          console.log("pressed", pressed);
          return {
            ...styles.button,
            opacity: pressed ? 0.5 : 1,
            backgroundColor: pressed ? "red" : "#ddd",
            borderRadius: pressed ? 10 : 0,
          };
        }}
      >
        <Text>Click me</Text>
      </Pressable>
      <Text style={{ fontSize: 20 }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti
        eveniet repudiandae sapiente atque magni ratione aliquam harum, impedit
        consequuntur nam? Voluptas ipsum maiores nihil, harum sapiente ipsa illo
        quae!
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    width: "50%",
    marginInline: "auto",
    alignItems: "center",
    marginBlock: 10,
  },
});
