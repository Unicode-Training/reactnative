import StoreProvider from "@/store/StoreProvider";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <StoreProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => null,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            tabBarLabel: "About",
            tabBarIcon: () => null,
          }}
        />
      </Tabs>
    </StoreProvider>
  );
}
