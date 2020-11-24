import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import { Drawer } from "react-native-paper";
const DrawerBody = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <Drawer.Section title="*Title can be added here">
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          )}
          label="HOME"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name="restaurant-menu" color={color} size={size} />
          )}
          label="MENU"
          onPress={() => {
            navigation.navigate("Menu");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          )}
          label="SEARCH"
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name="shopping-cart" color={color} size={size} />
          )}
          label="CART"
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome name="newspaper-o" color={color} size={size} />
          )}
          label="RESERVATIONS"
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="truck" color={color} size={size} />
          )}
          label="ORDER"
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default DrawerBody;
