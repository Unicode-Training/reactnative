import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Post = {
  id: number;
  title: string;
  body: string;
};
export default function HttpRequest() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`http://192.168.100.163:3000/posts`);
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isLoading && <Text style={styles.title}>Loading...</Text>}
        <Text style={styles.title}>DEMO HTTP REQUEST</Text>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    padding: 15,
  },
  item: {
    paddingBlock: 15,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

//make http request (fetch, axios,...) --> Gọi: event handler, useEffect()
// --> Server trả về response
// --> Lưu state
// --> render state (jsx)
