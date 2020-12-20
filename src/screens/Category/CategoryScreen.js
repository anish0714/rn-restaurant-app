import React from "react";
import PropTypes from "prop-types";


import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
//COMPONENT
import StackScreenHeader from "../../components/StackScreenHeader/StackScreenHeader";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
//REDUX
import { connect } from "react-redux";

const CategoryScreen = ({ route, appReducer: { selectedCategory } }) => {
  const { title } = route.params[0];
  return (
    <View style={styles.container}>
      <StackScreenHeader title={title} />
      {selectedCategory?.length ? (
        <FlatList
          data={selectedCategory}
          keyExtractor={(item) => item.foodId.toString()}
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
      ) : (
        <Image
          resizeMode="cover"
          source={{
            uri:
              "https://cdn.dribbble.com/users/436620/screenshots/8386175/no_results_found__4x.jpg",
          }}
          style={styles.image}
        />
      )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
});
