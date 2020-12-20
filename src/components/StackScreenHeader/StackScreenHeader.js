import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

//
//COMPONENT------------->
const StackScreenHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={25} color="black" />
        <Text style={styles.text}>back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StackScreenHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 15,
  },
  titleText: {
    alignSelf: "center",
    fontSize: 17,
  },
  backButton: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  text: {
    marginLeft: 5,
  },
});
