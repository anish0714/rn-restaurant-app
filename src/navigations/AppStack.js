import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//SCREENS
import HomeScreen from "../screens/Home/HomeScreen";
import MenuScreen from "../screens/Menu/MenuScreen";
import CategoryScreen from "../screens/Category/CategoryScreen";
import SingleFoodItemScreen from "../screens/SingleFoodItem/SingleFoodItemScreen";
import SearchScreen from "../screens/Search/SearchScreen";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="SingleFoodItem" component={SingleFoodItemScreen} />
    </Stack.Navigator>
  );
};
export const MenuStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="SingleFoodItem" component={SingleFoodItemScreen} />
    </Stack.Navigator>
  );
};
export const SearchStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};
