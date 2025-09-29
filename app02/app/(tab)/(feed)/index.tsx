import { useNavigation, useRouter } from "expo-router";
import { View, Text, Button } from "react-native";
export default function FeedIndexScreen() {
  // const navigation = useNavigation<any>();
  const router = useRouter();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Feed Index</Text>
      <Button
        title="Open user"
        onPress={() =>
          // navigation.navigate("(home)/[user]", { user: "hoangan" })
          router.push(`/hoangan`)
        }
      />
    </View>
  );
}
