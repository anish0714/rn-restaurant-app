import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { Ionicons, Feather, EvilIcons } from "@expo/vector-icons";

//CARD COMPONENT
import CategoryCard from "../../components/CategoryCard/CategoryCard";

//REDUX
import { connect } from "react-redux";

const SearchScreen = ({ navigation, appReducer: { foodItemData } }) => {
  // const [searchText, onSearchText] = useState();
  const [dataItem, setDataItem] = useState();

  const searchFoodItem = (value) => {
    let searchDataSet = foodItemData.filter((foodItem) => {
      let foodTitleLowerCase = foodItem.title.toLowerCase();
      let searchTermToLowerCase = value.toLowerCase();
      return foodTitleLowerCase.indexOf(searchTermToLowerCase) > -1;
    });

    setDataItem(searchDataSet);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <EvilIcons
                name="search"
                size={22}
                color="gray"
                style={{ paddingVertical: 4 }}
              />

              <TextInput
                placeholder="Search..."
                style={{ width: "70%" }}
                onChangeText={(value) => searchFoodItem(value)}
              />
            </View>
            <TouchableOpacity onPress={() => setDataItem(null)}>
              <Text>cancel</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Feather name="shopping-cart" size={26} color="black" />
          </TouchableOpacity>
        </View>

        <FlatList
          keyExtractor={(item) => item.foodId.toString()}
          data={dataItem}
          ListEmptyComponent={() => {
            return (
              <View>
                <Text>List is Empty</Text>
              </View>
            );
          }}
          renderItem={({ item }) => {
            return (
              <CategoryCard
                title={item.title}
                description={item.description}
                cost={item.cost}
                photo_url={item.photo_url}
                photosArray={item.photosArray}
              />
            );
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

SearchScreen.prototypes = {
  appReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  appReducer: state.appReducer,
});
export default connect(mapStateToProps)(SearchScreen);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },

  searchContainer: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  searchBox: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "lightgray",
    backgroundColor: "lightgray",
  },
});
