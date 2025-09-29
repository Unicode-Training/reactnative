import { decrement, demoMiddleware, increment } from "@/store/slice/counter";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>{count}</Text>
      <Button
        title="Decrement"
        onPress={() => {
          dispatch(decrement(5));
        }}
      />
      <Button
        title="Increment"
        onPress={() => {
          dispatch(increment(10));
        }}
      />
    </View>
  );
}
