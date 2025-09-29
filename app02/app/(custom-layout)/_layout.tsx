// import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSegments } from "expo-router";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function CustomLayout() {
  const segment = useSegments();
  console.log(segment);

  return (
    <Tabs>
      {/* <Tabs.Screen
        name="home-redirect"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products/index"
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="posts/index"
        options={{
          tabBarLabel: "Posts",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="post-add" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products/[id]"
        options={{
          href: null,
        }}
      /> */}
      <SafeAreaProvider>
        <TabSlot />
      </SafeAreaProvider>

      <TabList style={styles.tabList}>
        <TabTrigger name="home" href="/home-redirect" style={styles.tabTrigger}>
          <FontAwesome5 name="home" size={24} color={"home"} />
          <Text>Home</Text>
        </TabTrigger>
        <TabTrigger name="posts" href="/posts" style={styles.tabTrigger}>
          <MaterialIcons name="post-add" size={24} color={"black"} />
          <Text>Posts</Text>
        </TabTrigger>
        <TabTrigger name="products" href="/products" style={styles.tabTrigger}>
          <FontAwesome5 name="shopping-bag" size={24} color={"black"} />
          <Text>Products</Text>
        </TabTrigger>
        <TabTrigger
          name="product-detail"
          href={"/products/[id]"}
          style={{
            display: "none",
          }}
        ></TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    display: "flex",
    position: "absolute",
    bottom: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    width: "100%",
  },
  tabTrigger: {
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
