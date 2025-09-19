import React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function scrollview() {
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log("scrolling", e.nativeEvent);
  };
  return (
    <ScrollView
      style={{
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: "green",
        padding: 10,
      }}
      pagingEnabled
      contentContainerStyle={{
        padding: 20,
        backgroundColor: "#fff",
      }}
      onScroll={handleScroll}
    >
      <View>
        <Text style={styles.textLarge}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni minus
          eius quod commodi recusandae obcaecati itaque, ipsum beatae aliquid
          voluptates quidem dolores optio, incidunt exercitationem maiores,
          laboriosam accusamus illo vitae.
        </Text>
        <Text style={styles.textLarge}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni minus
          eius quod commodi recusandae obcaecati itaque, ipsum beatae aliquid
          voluptates quidem dolores optio, incidunt exercitationem maiores,
          laboriosam accusamus illo vitae.
        </Text>
        <Text style={styles.textLarge}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni minus
          eius quod commodi recusandae obcaecati itaque, ipsum beatae aliquid
          voluptates quidem dolores optio, incidunt exercitationem maiores,
          laboriosam accusamus illo vitae.
        </Text>
        <Text style={{ ...styles.textLarge, ...styles.backgroundYellow }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni minus
          eius quod commodi recusandae obcaecati itaque, ipsum beatae aliquid
          voluptates quidem dolores optio, incidunt exercitationem maiores,
          laboriosam accusamus illo vitae.
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  textLarge: {
    fontSize: 50,
  },
  backgroundYellow: {
    backgroundColor: "yellow",
  },
});
