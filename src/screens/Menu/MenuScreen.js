import React from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";

//COMPONENTS
import AppHeader from "../../components/AppHeader/AppHeader";
//REDUX
import { connect } from "react-redux";
//ACTIONS
import { getSelectedFoodItem } from "../../actions/appAction";

//CONSTANTS
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const recipeNumColums = 2;
//Margin
const RECIPE_ITEM_MARGIN = 5;
const IMAGE_WIDTH =
  (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums;

const RenderItem = ({ imageUrl, title, navigation, getSelectedFoodItem }) => {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => {
        getSelectedFoodItem(title);
        // console.log()
        navigation.navigate("Category", [{ title }]);
      }}
    >
      <ImageBackground
        // blurRadius={90}
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
      >
        <View style={styles.blurContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

//SCREEN ------------------------>
const MenuScreen = ({
  navigation,
  getSelectedFoodItem,
  appReducer: { categoriesData },
}) => {
  return (
    <View style={styles.container}>
      <AppHeader title={"MENU"} navigation={navigation} />
      <FlatList
        numColumns={2}
        key={2}
        data={categoriesData}
        keyExtractor={(item) => item.categoryId.toString()}
        renderItem={({ item }) => {
          return (
            <RenderItem
              imageUrl={item.imageUrl}
              title={item.title}
              navigation={navigation}
              getSelectedFoodItem={getSelectedFoodItem}
            />
          );
        }}
      />
    </View>
  );
};

MenuScreen.prototypes = {
  appReducer: PropTypes.object.isRequired,
  getSelectedFoodItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  appReducer: state.appReducer,
});
export default connect(mapStateToProps, { getSelectedFoodItem })(MenuScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  menuItem: {
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: RECIPE_ITEM_MARGIN,
    marginLeft: RECIPE_ITEM_MARGIN,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH / 1.4,
  },
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba( 0, 0, 0, 0.5 )",
  },
  title: {
    color: "white",
    fontSize: 15,
  },
});
