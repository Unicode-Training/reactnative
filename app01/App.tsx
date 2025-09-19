import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AboutScreen from "./screens/AboutScreen";
import HomeTab from "./screens/HomeTabs/HomeTab";
import ProductScreen from "./screens/ProductScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              // color: "green",
              // backgroundColor: "yellow",
            },
            headerStyle: {
              backgroundColor: "blueviolet",
            },
            // headerMode: "screen",
            headerRight: () => {
              return (
                <Text
                  onPress={() => {
                    Alert.alert("Ahihi");
                  }}
                >
                  Ahihi
                </Text>
              );
            },

            // headerBackTitle: "Quay lại",
            // headerBackTitleStyle: {
            //   color: "#fff",
            // },
            // headerLeft: () => {
            //   return <Text>Left</Text>;
            // },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeTab}
            options={{
              title: "Trang chủ",
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{
              title: "Giới thiệu",
            }}
            // initialParams={{
            //   id: 1,
            // }}
          />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
