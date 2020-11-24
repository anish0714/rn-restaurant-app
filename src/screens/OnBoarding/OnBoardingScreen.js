import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

//DATA
import { slider } from "../../data/dataArrays";
//SLIDER
import AppIntroSlider from "react-native-app-intro-slider";
//COMPONENT
import RenderSlider from "../../components/Slider/RenderSlider";

//ACTIONS
import { setShowIntroSlider } from "../../actions/authAction";
//REDUX
import { connect } from "react-redux";

const OnBoardingScreen = ({ setShowIntroSlider }) => {
  return (
    <AppIntroSlider
      keyExtractor={(item) => item.id.toString()}
      data={slider}
      renderItem={({ item }) => {
        return <RenderSlider item={item} />;
      }}
      onDone={() => setShowIntroSlider()}
      showSkipButton={true}
      dotStyle={{
        backgroundColor: "lightgray",
        height: 7,
        width: 7,
      }}
    />
  );
};

OnBoardingScreen.prototypes = {
  setShowIntroSlider: PropTypes.func.isRequired,
};
export default connect(null, { setShowIntroSlider })(OnBoardingScreen);

const styles = StyleSheet.create({});
