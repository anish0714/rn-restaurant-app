import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../../assets/images/BrowseFood.png")}
        />
        <Text style={styles.textTitle}>Welcome to our restaurant</Text>
        <Text style={styles.textDescription}>
          Order food and make reservations with one click.
        </Text>
        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButtonContainer}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    //  borderWidth: 1,
    marginHorizontal: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    bottom: "5%",
  },
  image: {
    width: 130,
    height: 130,
    tintColor: "#5da339",
     marginBottom: 10,
  },
  textTitle: {
    fontSize: 17,
    color: "#5da339",
    //marginBottom: "10%",
    textAlign: "center",
  },
  textDescription: {
    fontSize: 17,
   marginBottom: "15%",
    textAlign: "center",
  },
  loginButtonContainer: {
    width: Dimensions.get("window").width - 100,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: "5%",
    borderWidth: 1,
    backgroundColor: "#5da339",
    borderColor: "#5da339",
  },
  signUpButtonContainer: {
    width: Dimensions.get("window").width - 100,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: "5%",
    borderWidth: 1,
  },
  loginButtonText: {
    fontSize: 17,
    color: "white",
  },
  signupButtonText: {
    fontSize: 17,
  },
});
