import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, FlatList } from "react-native";

//COMPONENT
import AppHeader from "../../components/AppHeader/AppHeader";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import BestDeals from "../../components/BestDeals/BestDeals";
import MostPopular from "../../components/MostPopular/MostPopular";

//REDUX
import { connect } from "react-redux";

//SCREEN------------>
const HomeScreen = ({
  navigation,
  appReducer: { foodItemData, categoriesData },
}) => {
  return (
    <View style={styles.homeContainer}>
      <AppHeader navigation={navigation} />

        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <FlatList
                ListHeaderComponent={() => (
                  <PopularCategories categoriesData={categoriesData} />
                )}
                ListFooterComponent={() => (
                  <BestDeals categoriesData={categoriesData} />
                )}
              />
            );
          }}
          ListFooterComponent={() => (
            <MostPopular foodItemData={foodItemData} />
          )}
        />
    </View>
  );
};

HomeScreen.prototypes = {
  appReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  appReducer: state.appReducer,
});

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
