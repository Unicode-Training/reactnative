import React, { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Counter() {
  const [count, setCount] = useState(0);
  const myRef = useRef(0); //{current: 0}
  // const [a, setA] = useState(0);
  // const [b, setB] = useState(0);
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    myRef.current++;
  };
  //Logic
  //   useEffect(() => {
  //     if (count < 5) {
  //       setA(count + 1);
  //     }
  //     if (count < 10) {
  //       setB(count + 1);
  //     }
  //   });

  //   useEffect(() => {
  //     console.log("Effect a", a);
  //     console.log("Effect b", b);
  //   }, [a, b]);

  useEffect(() => {
    // myRef.current = count;
    // console.log("Effect count", count);
    //cleanup
    return () => {
      //   console.log("Cleanup", count);
    };
  }, [count]);
  console.log(myRef.current);

  return (
    <SafeAreaView>
      <View>
        <Text style={style.text}>Count: {count}</Text>
        <Button title="Increment" onPress={handleIncrement} />
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

//useEffect --> Xử lý các Side Effect
//useEffect(callback, dependencies)
// - [] --> Chỉ chạy callback sau khi component được mounted
// - null, undefined --> Chạy callback khi component re-render
// - [bien1, bien2, ...] --> Chạy callback khi 1 trong các biến thay đổi

//Thứ tự useEffect()
//1. state thay đổi
//2. component re-render
//3. UI Update
//4. cleanup (Nếu có)
//5. callback useEffect
