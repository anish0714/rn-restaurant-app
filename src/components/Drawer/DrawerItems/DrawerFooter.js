import React from "react";
import { StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Drawer } from "react-native-paper";
import { DrawerItem } from "@react-navigation/drawer";

const DrawerFooter = ({ navigation }) => {
  return (
    <Drawer.Section
      // title='signoff'
      style={styles.logout}
    >
      <DrawerItem
        icon={({ color, size }) => (
          <FontAwesome name="sign-out" color={color} size={size} />
        )}
        label="SIGN OUT"
        onPress={() => {
          navigation.closeDrawer();
        }}
      />
    </Drawer.Section>
  );
};

export default DrawerFooter;

const styles = StyleSheet.create({
  logout: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
