import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//COMPONENT -------> DRAWER
import DrawerContents from "../components/Drawer/DrawerContents";
//STACK SCREENS
import { HomeStack, MenuStack, SearchStack } from "./AppStack";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen name="Main" component={HomeStack} />
      <Drawer.Screen name="Menu" component={MenuStack} />
      <Drawer.Screen name="Search" component={SearchStack} />
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
