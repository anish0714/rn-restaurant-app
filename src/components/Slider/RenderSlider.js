import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const RenderSlider = ({ item: { image, title, description } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image resizeMode="contain" style={styles.image} source={image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default RenderSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5da339",
  },
  innerContainer: {
    margin: 20,
    // bottom: 10,
    // bottom: '10%'
  },
  image: {
    tintColor: "#ffffff",
    height: 120,
    width: 120,
    alignSelf: "center",
    bottom: 150,
   // bottom: "100%",
  },
  title: {
    fontSize: 17,
    color: "#ffffff",
    letterSpacing: 0,
    textAlign: "center",
    bottom: 85,
    //bottom: "55%",
  },
  description: {
    fontSize: 17,
    color: "#ffffff",
    letterSpacing: 0,
    textAlign: "center",
     bottom: 55,
    //bottom: "35%",
  },
});
