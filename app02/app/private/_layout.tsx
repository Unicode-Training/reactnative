import React from "react";
import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@/@components/CustomDrawer";

export default function _layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="account/index"
        options={{
          title: "Tài khoản",
          drawerLabel: "Tài khoản",
          drawerActiveTintColor: "green",
        }}
      />
      <Drawer.Screen
        name="account/order"
        options={{
          title: "Đơn hàng",
          drawerLabel: "Đơn hàng",
          drawerActiveTintColor: "green",
        }}
      />
    </Drawer>
  );
}
