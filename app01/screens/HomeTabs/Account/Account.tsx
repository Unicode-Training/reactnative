import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CustomDrawer from "./CustomDrawer";
import Order from "./Order";
import Profile from "./Profile";
const Drawer = createDrawerNavigator();

export default function Account() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Profile"
        options={{
          title: "Tài khoản",
          drawerActiveTintColor: "green",
          drawerIcon: ({ color }) => {
            return <FontAwesome name="user" color={color} size={24} />;
          },
        }}
        component={Profile}
      />
      <Drawer.Screen
        name="Order"
        options={{
          title: "Đơn hàng",
          drawerActiveTintColor: "green",
          drawerIcon: ({ color }) => {
            return <FontAwesome name="shopping-cart" color={color} size={24} />;
          },
        }}
        component={Order}
      />
    </Drawer.Navigator>
  );
}
