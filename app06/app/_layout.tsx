import { useAuthStore } from "@/store/authStore";
import { Stack, Tabs } from "expo-router";
import { Image } from "react-native";

export default function RootLayout() {
  const { user }: any = useAuthStore();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          tabBarLabel: user ? "Profile" : "Login",
          tabBarIcon: () => (
            <Image
              source={{ uri: user?.avatar }}
              style={{ width: 24, height: 24, borderRadius: 50 }}
              resizeMode="none"
            />
          ),
        }}
      />
    </Tabs>
  );
}
