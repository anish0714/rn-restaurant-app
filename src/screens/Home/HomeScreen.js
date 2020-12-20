import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

//COMPONENT
import AppHeader from "../../components/AppHeader/AppHeader";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import BestDeals from "../../components/BestDeals/BestDeals";
import MostPopular from "../../components/MostPopular/MostPopular";

//SCREEN------------>
const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <AppHeader />

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <FlatList
              ListHeaderComponent={PopularCategories}
              ListFooterComponent={BestDeals}
            />
          );
        }}
        ListFooterComponent={MostPopular}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
