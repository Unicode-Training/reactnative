import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import Account from "./Account/Account";
import Feed from "./Feed";
import Message from "./Message";
const Tab = createBottomTabNavigator();
export default function HomeTab({ route }: any) {
  const [currenTab, setCurrenTab] = useState("feed");
  console.log(currenTab);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        // tabBarPosition: "bottom",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        listeners={() => {
          return {
            tabPress: () => {
              setCurrenTab("feed");
            },
          };
        }}
        options={{
          title: "Tin mới",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="home" color={color} size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        listeners={() => {
          return {
            tabPress: () => {
              setCurrenTab("message");
            },
          };
        }}
        options={{
          title: "Tin nhắn",
          tabBarIcon: ({ color }) => {
            return <Entypo name="message" color={color} size={24} />;
          },
          // tabBarBadge: 10,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        listeners={() => {
          return {
            tabPress: () => {
              setCurrenTab("account");
            },
          };
        }}
        options={{
          title: "Tài khoản",
          tabBarIcon: ({ color }) => {
            return <Entypo name="user" color={color} size={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
