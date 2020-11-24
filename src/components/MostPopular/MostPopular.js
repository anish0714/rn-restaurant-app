import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const RenderItem = ({ photo_url, title, cost }) => {
  return (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={{ url: photo_url }} style={styles.image} />
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.costContainer}>
          <FontAwesome name="rupee" size={20} color="black" />
          <Text style={styles.cost}>{cost}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MostPopular = ({ foodItemData }) => {
  return (
    <FlatList
      data={foodItemData}
      keyExtractor={(item) => item.foodId.toString()}
      ListHeaderComponent={() => (
        <Text style={styles.headingText}>Most Popular</Text>
      )}
      renderItem={({ item }) => {
        return (
          <RenderItem
            photo_url={item.photo_url}
            title={item.title}
            cost={item.cost}
          />
        );
      }}
    />
  );
};

export default MostPopular;

const styles = StyleSheet.create({
  //------------------------------------->  RENDER ITEM STYLES
  imageContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").width / 2,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 15,
  },
  costContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cost: {
    fontSize: 15,
    paddingLeft: 5,
  },
  //-------------------------------------> COMPONENT STYLE
  headingText: {
    fontSize: 17,
    marginBottom: 10,
  },
  footer: {
    //  marginBottom: 50,
  },
});
