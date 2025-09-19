import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Form() {
  //   const handleChangeTextName = (value: string) => {
  //     console.log(value);
  //   };
  const handleChange = (e: any) => {
    console.log(e.target);
  };
  const handlePressButton = () => {
    console.log("Vừa click");
  };
  return (
    <SafeAreaView>
      <View>
        <Text>form</Text>
        <View>
          <Text>Name</Text>
          <TextInput placeholder="Enter your name..." onChange={handleChange} />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter your email..."
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput placeholder="Enter your password..." secureTextEntry />
        </View>
        <View>
          <Text>Message</Text>
          <TextInput
            editable={false}
            style={{
              borderColor: "red",
              borderStyle: "solid",
              borderWidth: 1,
            }}
            placeholder="Enter your message..."
            multiline
          />
        </View>
        <View
          style={{
            width: "50%",
            marginInline: "auto",
          }}
        >
          <Button onPress={handlePressButton} title="Login" color={"red"} />
        </View>
      </View>
    </SafeAreaView>
  );
}
