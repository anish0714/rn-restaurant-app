import React from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
//NAVIGATION
import { useNavigation } from "@react-navigation/native";
//ACTIONS
import { getSelectedFoodItem } from "../../actions/appAction/";
//REDUX
import { connect } from "react-redux";

//COMPONENT-----------------------> RENDER-ITEMS
const RenderItem = ({ imageUrl, title, getSelectedFoodItem }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => {
        getSelectedFoodItem(title);
        navigation.navigate("Category", [{ title }]);
      }}
    >
      <Image source={{ url: imageUrl }} style={styles.image} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

//MAIN COMPONENT ----------------------->
const PopularCategories = ({
  getSelectedFoodItem,
  appReducer: { categoriesData },
}) => {
  return (
    <View>
      <Text style={styles.headingText}>Popular Categories</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoriesData}
        keyExtractor={(item) => item.categoryId.toString()}
        renderItem={({ item }) => {
          return (
            <RenderItem
              imageUrl={item.imageUrl}
              title={item.title}
              getSelectedFoodItem={getSelectedFoodItem}
            />
          );
        }}
      />
    </View>
  );
};

PopularCategories.prototypes = {
  getSelectedFoodItem: PropTypes.func.isRequired,
  appReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  appReducer: state.appReducer,
});

export default connect(mapStateToProps, { getSelectedFoodItem })(
  PopularCategories
);

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
