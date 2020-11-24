import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import LandingScreen from "../screens/LandingScreen/LandingScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import SignUpScreen from "../screens/SignUp/SignUpScreen";

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode={"none"}>
        <AuthStack.Screen name="LandingScreen" component={LandingScreen} />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
