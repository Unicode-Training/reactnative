import React, { useEffect, useRef } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const DATA: PostItem[] = [
  {
    id: 1,
    title: "Title 1",
    body: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Title 2",
    body: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Title 3",
    body: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "Title 4",
    body: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    title: "Title 5",
    body: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
  },
];
type PostItem = {
  id: number;
  title: string;
  body: string;
};
export default function Flatlist() {
  const [refreshing, setRefreshing] = React.useState(false);
  const flatListRef = useRef<FlatList<PostItem>>(null);
  // const insets = useSafeAreaInsets();
  const handleScrollTo = () => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToEnd();
  };
  useEffect(() => {
    console.log(flatListRef);
  }, []);

  return (
    <SafeAreaView>
      <View>
        {/* <Text>Flatlist</Text> */}
        <Button title="Scroll To" onPress={handleScrollTo} />
        <FlatList
          ref={flatListRef}
          horizontal={false}
          ListHeaderComponent={<Text style={styles.header}>Header</Text>}
          ListFooterComponent={<Text style={styles.header}>Footer</Text>}
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          // onViewableItemsChanged={(value) => {
          //   console.log("onViewableItemsChanged");
          //   console.log(value);
          // }}
          // onEndReached={() => {
          //   console.log("Đã xong");
          // }}
          refreshing={refreshing}
          onRefresh={() => {
            console.log("refreshing");
            //Gọi API --> Khi API có kết quả sẽ chuyển refreshing thành false
            setRefreshing(true);
            setTimeout(() => {
              setRefreshing(false);
              console.log("Finish");
            }, 2000);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "yellow",
    marginBlock: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  body: {
    fontSize: 25,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
});
