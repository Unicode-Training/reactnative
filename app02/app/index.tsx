import { Link, useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const handleOpenAbout = () => {
    navigation.navigate("about");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>HomeScreen</Text>
      <Button title="About" onPress={handleOpenAbout} />
      <Link href={"/about"}>About</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/_posts"}>Posts</Link>
    </View>
  );
}
