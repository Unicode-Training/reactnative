import { Redirect } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
export default function HomeScreen() {
  return (
    <>
      <Redirect href={"/http-request"} />
      {/* <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "green", fontSize: 30 }}>
          Học{" "}
          <Text style={{ fontStyle: "italic", color: "red" }}>
            React Native
          </Text>{" "}
          không khó
        </Text>
      </View>
      <View
        style={{
          borderColor: "red",
          borderStyle: "solid",
          borderWidth: 1,
          flexDirection: "row",
        }}
      >
        <Image
          resizeMode="none"
          source={require("@/assets/images/front-end.png")}
          style={{
            width: "60%",
            height: 200,
          }}
        />
        <Image
          resizeMode="none"
          source={require("@/assets/images/splash-icon.png")}
          style={{
            width: "40%",
            height: 200,
          }}
        />
      </View>
      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1755441172753-ac9b90dcd930?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{
            width: "100%",
            height: 300,
          }}
        />
      </View> */}
      {/* <View
        style={{
          height: 500,
        }}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1754835143820-bcf20e2e1a35?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              backgroundColor: "#000",
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              position: "relative",
              zIndex: 1,
            }}
          >
            Hello anh em
          </Text>
          <View
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#00000096",
            }}
          ></View>
        </ImageBackground>
      </View> */}
      {/* <Text
        style={{
          ...styles.titleLarge,
          ...styles.textCenter,
        }}
      >
        Danh sách sản phẩm
      </Text>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>Sản phẩm 1</Text>
          <Text style={styles.subTitle}>Giá: 5$</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Sản phẩm 1</Text>
          <Text style={styles.subTitle}>Giá: 5$</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Sản phẩm 1</Text>
          <Text style={styles.subTitle}>Giá: 5$</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Sản phẩm 1</Text>
          <Text style={styles.subTitle}>Giá: 5$</Text>
        </View>
        <View style={styles.itemFull}>
          <Text style={styles.title}>Sản phẩm 1</Text>
          <Text style={styles.subTitle}>Giá: 5$</Text>
        </View>
      </View>
      <View style={styles.openContainer}>
        <Text style={styles.openTitle}>Open Resturants</Text>
        <Image
          style={styles.openImage}
          source={require("@/assets/images/front-end.png")}
          resizeMode="none"
        />
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "row",
    padding: 15,
    flexWrap: "wrap",
  },
  item: {
    width: Dimensions.get("screen").width / 2 - 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
  },
  itemFull: {
    padding: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    // width: Dimensions.get("screen").width - 30,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    color: "red",
  },
  titleLarge: {
    fontSize: 24,
    color: "#333",
    paddingBlock: 30,
  },
  textCenter: {
    textAlign: "center",
  },
  openContainer: {
    padding: 15,
  },
  openImage: {
    width: "100%",
  },
  openTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBlock: 15,
  },
});

/*
flexDirection
flex
justifyContent
alignItems
gap
*/
