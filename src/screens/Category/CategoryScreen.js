import React from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

//REDUX
import { connect } from "react-redux";

const CategoryScreen = ({ route, appReducer: { selectedCategory } }) => {
  const { title } = route.params[0];
  return (
    <View>
      <View style={{ backgroundColor: "white", paddingBottom: 15 }}>
        <Text style={{ alignSelf: "center", fontSize: 17 }}>{title}</Text>
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Ionicons name="ios-arrow-back" size={25} color="black" />
          <Text style={{ marginLeft: 5 }}>back</Text>
        </View>
      </View>
      <FlatList
        data={selectedCategory}
        keyExtractor={(item) => item.foodId.toString()}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 20,
                backgroundColor: 'white'
              }}
            >
              <View
                style={{
                  width: Dimensions.get("window").width / 1.5,
                  justifyContent: "space-between"
                }}
              >
                <Text>{item.title}</Text>
                <Text ellipsizeMode="tail" numberOfLines={2}>
                  {item.description}
                </Text>
                <Text>INR {item.cost}</Text>
              </View>
              <View>
                <Image
                  style={{ height: 120, width: 120 }}
                  source={{ uri: item.photo_url }}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
CategoryScreen.prototypes = {
  appReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  appReducer: state.appReducer,
});

export default connect(mapStateToProps)(CategoryScreen);

const styles = StyleSheet.create({});
