import React from "react";
import { View, Text } from "react-native";
import MainApp from "./MainApp";
//REDUX
import { Provider, connect } from "react-redux";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
