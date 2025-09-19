import { useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    title: "Section 1",
    data: [
      {
        id: 1,
        name: "Item 1.1",
        description: "Description 1.1",
      },
      {
        id: 2,
        name: "Item 1.2",
        description: "Description 1.2",
      },
      {
        id: 3,
        name: "Item 1.3",
        description: "Description 1.3",
      },
      {
        id: 4,
        name: "Item 1.4",
        description: "Description 1.4",
      },
    ],
  },

  {
    title: "Section 2",
    data: [
      {
        id: 1,
        name: "Item 2.1",
        description: "Description 2.1",
      },
      {
        id: 2,
        name: "Item 2.2",
        description: "Description 2.2",
      },
      {
        id: 3,
        name: "Item 2.3",
        description: "Description 2.3",
      },
      {
        id: 4,
        name: "Item 2.4",
        description: "Description 2.4",
      },
    ],
  },
  {
    title: "Section 3",
    data: [
      {
        id: 1,
        name: "Item 3.1",
        description: "Description 3.1",
      },
      {
        id: 2,
        name: "Item 3.2",
        description: "Description 3.2",
      },
      {
        id: 3,
        name: "Item 3.3",
        description: "Description 3.3",
      },
      {
        id: 4,
        name: "Item 3.4",
        description: "Description 3.4",
      },
    ],
  },
];
const sectionData = DATA.map((sectionItem, sectionIndex) => {
  return {
    ...sectionItem,
    data: sectionItem.data.map((item, index) => {
      return {
        ...item,
        _key: `${sectionIndex}_${item.id}_${index}`,
      };
    }),
  };
});

export default function Sectionlist() {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const handlePress = (key: string) => {
    setSelectedId(key);
  };

  return (
    <View>
      <SectionList
        ListHeaderComponent={<Text>Unicode 1</Text>}
        ListFooterComponent={<Text>Unicode 2</Text>}
        stickySectionHeadersEnabled={true}
        onViewableItemsChanged={(value) => {
          // console.log(value);
        }}
        keyExtractor={(item, index) => {
          return item._key;
        }}
        extraData={selectedId}
        sections={sectionData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text
              style={{
                ...styles.title,
                color: selectedId === item._key ? "red" : "black",
              }}
              onPress={() => handlePress(item._key)}
            >
              {item.name}
            </Text>
            <Text style={styles.body}>{item.description}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        refreshing={refreshing}
        // onRefresh={() => {
        //   console.log("refreshing");
        //   setRefreshing(true);
        //   setTimeout(() => {
        //     setRefreshing(false);
        //   }, 2000);
        // }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "yellow",
    textAlign: "center",
  },
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
});
