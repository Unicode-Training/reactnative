import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation, useRouter } from "expo-router";
import React from "react";
export default function CustomDrawer(props: any) {
  const navigation = useNavigation<any>();
  // const router = useRouter();
  const handleLogout = () => {
    console.log("Logout");
    // router.push("/");
    navigation.popTo("index");
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={"Logout"}
        onPress={handleLogout}
        icon={({ color }) => (
          <FontAwesome name="sign-out" color={color} size={24} />
        )}
      />
    </DrawerContentScrollView>
  );
}
