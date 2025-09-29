import { View, Text, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import { Link, useRouter } from "expo-router";
import { useAuthStore } from "@/store/authStore";
export default function ProfileScreen() {
  // const [user, setUser] = useState({} as { name: string; email: string });
  const router = useRouter();
  const authStore: any = useAuthStore();
  if (!authStore) {
    return;
  }
  const { user } = authStore;

  return (
    <View>
      <Text style={{ fontSize: 30 }}></Text>
      <Text style={{ fontSize: 20 }}>Name: {user?.name}</Text>
      <Text style={{ fontSize: 20 }}>Email: {user?.email}</Text>
      <Button
        color={"red"}
        title="Logout"
        onPress={async () => {
          await SecureStore.deleteItemAsync("access_token");
          await SecureStore.deleteItemAsync("refresh_token");
          router.push(`/login`);
        }}
      />
      <Button
        title="Update token"
        onPress={async () => {
          await SecureStore.setItemAsync("access_token", "something");
        }}
      />
      <Button
        title="Update token and refresh"
        onPress={async () => {
          await SecureStore.setItemAsync("access_token", "something");
          await SecureStore.setItemAsync("refresh_token", "something");
        }}
      />
      <Link href={"/order"}>Order</Link>
    </View>
  );
}

//refresh rotation --> Cấp lại cả refresh token khi access token hết hạn
