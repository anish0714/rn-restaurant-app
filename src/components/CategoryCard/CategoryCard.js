import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ title, description, cost, photo_url, photosArray }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() =>
        navigation.navigate("SingleFoodItem", [
          { title, description, cost, photo_url,photosArray },
        ])
      }
    >
      <View style={styles.contentsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text ellipsizeMode="tail" numberOfLines={2}>
          {description}
        </Text>
        <Text>INR {cost}</Text>
      </View>
      <View>
        <Image style={styles.image} source={{ uri: photo_url }} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: "white",
  },
  contentsContainer: {
    width: Dimensions.get("window").width - 130,
    justifyContent: "space-between",
    marginLeft: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
  },
  image: { height: 120, width: 120 },
});
