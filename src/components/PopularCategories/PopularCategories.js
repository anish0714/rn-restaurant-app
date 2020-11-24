import React from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

//COMPONENT-----------------------> RENDER-ITEMS
const RenderItem = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={{ url: imageUrl }} style={styles.image} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

//MAIN COMPONENT ----------------------->
const PopularCategories = ({ categoriesData }) => {
  return (
    <View>
      <Text style={styles.headingText}>Popular Categories</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoriesData}
        keyExtractor={(item) => item.categoryId.toString()}
        renderItem={({ item }) => {
          return <RenderItem imageUrl={item.imageUrl} title={item.title} />;
        }}
      />
    </View>
  );
};

export default PopularCategories;

const styles = StyleSheet.create({
  imageContainer: {
    margin: 10,
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  headingText: {
    fontSize: 17,
  },
});
