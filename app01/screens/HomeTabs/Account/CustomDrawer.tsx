import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
export default function CustomDrawer(props: any) {
  const navigation = useNavigation<any>();
  const handleLogout = () => {
    console.log("Logout");
    navigation.popTo("Home", {
      screen: "Feed",
    });
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <View style={{ flexDirection: "row", gap: 10 }}>
        <FontAwesome name="sign-out" size={24} />
        <Text>Logout</Text>
      </View> */}
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
