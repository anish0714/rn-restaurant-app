import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const AppHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="ios-menu" size={30} color="black" />
      </TouchableOpacity>
      {title && <Text>{title}</Text>}
      <TouchableOpacity>
        <Feather name="shopping-cart" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 10,
  },
});
