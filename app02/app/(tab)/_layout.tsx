import React from "react";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name={"(home)"}
        options={{
          title: "Home Tab",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="(feed)"
        options={{
          title: "Feed Tab",
        }}
      />
    </Tabs>
  );
}
