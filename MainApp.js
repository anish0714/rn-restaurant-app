//REACT
import React from "react";
import PropTypes from "prop-types";
import { View, SafeAreaView, StatusBar } from "react-native";

//NAVIGATION-SCREENS
import AuthNavigation from "./src/navigations/AuthNavigation";
import AppNavigation from "./src/navigations/AppNavigation";
import OnBoarding from "./src/screens/OnBoarding/OnBoardingScreen";

//REDUX
import { connect } from "react-redux";

const MainApp = ({ authReducer: { showIntroSlider, isLogin } }) => {
  return (
    <>
      {/* <SafeAreaView />
      <StatusBar barStyle={"dark-content"} />
      <AppNavigation /> */}

      <StatusBar
        barStyle={!showIntroSlider ? "light-content" : "dark-content"}
      />
      {showIntroSlider ? <SafeAreaView /> : null}
      {!showIntroSlider ? (
        <OnBoarding />
      ) : !isLogin ? (
        <AuthNavigation />
      ) : (
        <AppNavigation />
      )}
    </>
  );
};

MainApp.propTypes = {
  authReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapStateToProps)(MainApp);
