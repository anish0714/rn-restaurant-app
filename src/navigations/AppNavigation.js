import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//COMPONENT -------> DRAWER
import DrawerContents from "../components/Drawer/DrawerContents";

//SCREENS
import HomeScreen from "../screens/Home/HomeScreen";
import MenuScreen from "../screens/Menu/MenuScreen";
import CategoryScreen from "../screens/Category/CategoryScreen";
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen name="Main" component={RootStack} />
    </Drawer.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
