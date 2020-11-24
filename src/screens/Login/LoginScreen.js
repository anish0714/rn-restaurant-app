import React, { useState } from "react";
import PropTypes from "prop-types";

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

//ACTIONS
import { verifyUser } from "../../actions/authAction";

//REDUX
import { connect } from "react-redux";

const UserSchema = yup.object({
  id: yup.string().required().min(5),
  password: yup.string().required().min(5),
});

const LoginScreen = ({ navigation, verifyUser, authReducer: { isLogin } }) => {
  const [loginFailText, setLoginFailText] = useState(null);

  const verify = (id, pass) => {
    verifyUser(id, pass);
    // if (isLogin === false) {
    //   setLoginFailText("Please enter valid user and password");
    // }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Ionicons
          name="ios-arrow-back"
          size={40}
          color="black"
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Sign In</Text>
          <Formik
            initialValues={{ id: "", password: "" }}
            validationSchema={UserSchema}
            onSubmit={(values) => {
              // console.log(values.id, values.password);
              verify(values.id, values.password);
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  placeholder="Email or phone"
                  style={styles.textInput}
                  onChangeText={props.handleChange("id")}
                  value={props.values.id}
                  onBlur={props.handleBlur("id")}
                />
                <Text style={{ marginLeft: 20, color: "crimson" }}>
                  {props.touched.id && props.errors.id}
                </Text>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onBlur={props.handleBlur("password")}
                />
                <Text style={{ marginLeft: 20, color: "crimson" }}>
                  {props.touched.password && props.errors.password}
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.loginButtonContainer}
                    onPress={props.handleSubmit}
                  >
                    <Text style={styles.loginButtonText}>Log In</Text>
                  </TouchableOpacity>
                  <View style={{ paddingVertical: "10%" }}>
                    <Text style={{ fontSize: 17 }}>OR</Text>
                  </View>
                  <TouchableOpacity style={styles.faceBookButtonContainer}>
                    <Text style={styles.loginButtonText}>Facebook Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          {loginFailText && (
            <Text style={{ alignSelf: "center", color: "crimson" }}>
              {loginFailText}
            </Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

LoginScreen.prototypes = {
  verifyUser: PropTypes.func.isRequired,
  authReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapStateToProps, { verifyUser })(LoginScreen);

const styles = StyleSheet.create({
  icon: {
    margin: 10,
    color: "gray",
  },
  container: {
    // borderWidth: 1,
    // flex: 1,
    margin: 10,
  },
  text: {
    fontSize: 30,
    color: "#5da339",
    paddingVertical: "10%",
  },

  textInput: {
    height: "10%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    alignItems: "center",
    margin: 20,
    justifyContent: "space-between",
  },
  loginButtonContainer: {
    width: Dimensions.get("window").width - 150,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 30,
    //borderWidth: 1,
    backgroundColor: "#5da339",
    // borderColor: "#5da339",
  },
  faceBookButtonContainer: {
    width: Dimensions.get("window").width - 150,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 30,
    //borderWidth: 1,
    backgroundColor: "#1f00bd",
    //borderColor: "#5da339",
  },
  loginButtonText: {
    fontSize: 17,
    color: "white",
  },
});
