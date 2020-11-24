import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

//FORMIK -> FORM //YUP -> VALIDATION
import { Formik } from "formik";
import * as yup from "yup";
import { verifyUser } from "../../actions/authAction";

const SignUpSchema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),
  number: yup
    .string()
    .min(10, "Invalid phone number")
    .max(10, "Invalid phone number"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

const SignUpScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
          <Ionicons
            name="ios-arrow-back"
            size={40}
            color="black"
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>Create New Acount</Text>
          <Formik
            validationSchema={SignUpSchema}
            initialValues={{
              name: "",
              number: "",
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(
                values.name,
                values.number,
                values.email,
                values.password
              );
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  placeholder="Name"
                  style={styles.textInput}
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
                  onBlur={props.handleBlur("name")}
                />
                <Text
                  style={{
                    marginLeft: 20,
                    color: "crimson",
                    paddingTop: 4,
                    marginBottom: 10,
                  }}
                >
                  {props.touched.name && props.errors.name}
                </Text>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Phone Number"
                  style={styles.textInput}
                  onChangeText={props.handleChange("number")}
                  value={props.values.number}
                  onBlur={props.handleBlur("number")}
                />
                <Text
                  style={{
                    marginLeft: 20,
                    color: "crimson",
                    paddingTop: 4,
                    marginBottom: 10,
                  }}
                >
                  {props.touched.number && props.errors.number}
                </Text>
                <TextInput
                  secureTextEntry={false}
                  keyboardType="email-address"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                />
                <Text
                  style={{
                    marginLeft: 20,
                    color: "crimson",
                    paddingTop: 4,
                    marginBottom: 10,
                  }}
                >
                  {props.touched.email && props.errors.email}
                </Text>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onBlur={props.handleBlur("password")}
                />
                <Text
                  style={{
                    marginLeft: 20,
                    color: "crimson",
                    paddingTop: 4,
                    marginBottom: 10,
                  }}
                >
                  {props.touched.password && props.errors.password}
                </Text>
                <TouchableOpacity
                  style={styles.faceBookButtonContainer}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  icon: {
    // margin: 10,
    color: "gray",
  },
  container: {
    // borderWidth: 1,
    // flex: 1,
    margin: 10,
    backgroundColor: "white",
  },
  text: {
    fontSize: 25,
    color: "#5da339",
    paddingVertical: "10%",
  },
  textInput: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 20,
    // marginBottom: 30,
  },
  faceBookButtonContainer: {
    width: Dimensions.get("window").width - 150,
    alignSelf: "center",
    paddingVertical: 15,
    borderRadius: 30,
    //borderWidth: 1,
    backgroundColor: "#344d91",
    //borderColor: "#5da339",
  },
  loginButtonText: {
    fontSize: 17,
    color: "white",
    alignSelf: "center",
  },
});
