import React from "react";
import { StyleSheet, View } from "react-native";

//COMPONENTS
import DrawerHeader from "./DrawerItems/DrawerHeader";
import DrawerBody from "./DrawerItems/DrawerBody";
import DrawerFooter from "./DrawerItems/DrawerFooter";
const DrawerContents = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DrawerHeader />
      <DrawerBody navigation={navigation} />
      <DrawerFooter navigation={navigation} />
    </View>
  );
};

export default DrawerContents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
