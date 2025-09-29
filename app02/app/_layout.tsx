import { Link, Slot, Stack } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  if (Platform.OS === "web") {
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <header>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </header>
        <Slot />
      </div>
    );
  }
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Protected guard={true}>
        <Stack.Screen
          name="private"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>

      <Stack.Screen name="about" />
      <Stack.Screen name="login" />
      <Stack.Screen
        name="(custom-layout)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="(tab)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
