import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

//COMPONENT
import StackScreenHeader from "../../components/StackScreenHeader/StackScreenHeader";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Entypo } from "@expo/vector-icons";

//CONSTANTS
const { width, height } = Dimensions.get("window");
const MARGIN = 20;

const SingleFoodItemScreen = ({ route }) => {
  const { title, description, cost, photo_url, photosArray } = route.params[0];
  const [currentImage, setCurrentImage] = useState(photo_url);
  const [fixedCost] = useState(cost);
  const [itemCost, setItemCost] = useState(cost);
  const [totalItem, settotalItem] = useState(1);

  const addItem = () => {
    let numberOfItems = totalItem;
    let totalCost = itemCost;
    numberOfItems = numberOfItems + 1;
    totalCost = parseInt(totalCost) + parseInt(fixedCost);
    settotalItem(numberOfItems);
    setItemCost(totalCost);
  };
  const deleteItem = () => {
    let numberOfItems = totalItem;
    let totalCost = itemCost;
    if (numberOfItems > 1) {
      totalCost = parseInt(totalCost) - parseInt(fixedCost);

      numberOfItems = numberOfItems - 1;
      settotalItem(numberOfItems);
      setItemCost(totalCost);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StackScreenHeader title={title} />
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        {/* <SelectedFoodItemCarousel photosArray={photosArray} /> */}

        <Image
          source={{ url: currentImage }}
          style={{
            width: width - MARGIN,
            height: width / 1.5,
            alignSelf: "center",
            marginVertical: 10,
          }}
        />

        <FlatList
          data={photosArray}
          keyExtractor={(item) => item}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => setCurrentImage(item)}
                style={{ marginRight: 10 }}
              >
                <Image
                  source={{ url: item }}
                  style={{
                    width: width / 4 - MARGIN,
                    height: width / 4 - MARGIN,
                    alignSelf: "center",
                    marginVertical: 10,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />

        <Text>{description}</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              // marginLeft: width / 3.5,
              //marginRight: width / 3.5,
              width: width / 4,
              padding: 2,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => deleteItem()}>
              <Entypo name="minus" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>{totalItem}</Text>
            <TouchableOpacity onPress={() => addItem()}>
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>INR {itemCost}</Text>
          </View>
        </View>

        <View
          style={{
            //borderWidth: 1,
            padding: 10,
            marginTop: 20,
            alignItems: "center",
            backgroundColor: "#5da339",
            borderRadius: 5
          }}
        >
          <Text style={{color: 'white', fontSize: 15}}>ADD TO CART</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleFoodItemScreen;

const styles = StyleSheet.create({});
