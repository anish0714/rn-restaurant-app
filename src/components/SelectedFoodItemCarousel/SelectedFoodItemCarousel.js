import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
//CONSTANT
const { width } = Dimensions.get("window");

const RenderItem = ({ item }) => {
  return (
    <ImageBackground source={{ uri: item }} style={styles.imageBackground}>
      {/* <Text style={styles.imageText}>{item.title}</Text> */}
    </ImageBackground>
  );
};

const SelectedFoodItemCarousel = ({ photosArray }) => {
  const carouselRef = useRef(null);
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(0);

  return (
    <View style={styles.carousel}>
      <Carousel
        ref={carouselRef}
        data={photosArray}
        renderItem={RenderItem}
        sliderWidth={width}
        itemWidth={width}
        //Image poping while sliding--------
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        // inactiveSlideScale={0.5}
        // inactiveSlideOpacity={0.1}
        //----------------------------------
        firstItem={slider1ActiveSlide}
        loop={true}
        autoplay={false}
        autoplayDelay={3000}
        autoplayInterval={2000}
        onSnapToItem={(index) => setSlider1ActiveSlide(index)}
        // itemHeight={height}
        containerCustomStyle={{ overflow: "visible" }}
        contentContainerCustomStyle={{ overflow: "visible" }}
        layout={"default"}
      />
      <Pagination
        dotsLength={photosArray.length}
        activeDotIndex={slider1ActiveSlide}
        containerStyle={styles.paginationContainer}
        dotColor="white"
        dotStyle={styles.paginationDot}
        inactiveDotColor="lightgray"
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
        carouselRef={carouselRef}
        tappableDots={!!carouselRef}
      />
    </View>
  );
};

export default SelectedFoodItemCarousel;

const styles = StyleSheet.create({
  imageBackground: {
    // ...StyleSheet.absoluteFillObject,
    // width: width,
    // height:width,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageText: {
    fontSize: 20,
    color: "white",
  },
  //-------------------------------------> COMPONENT STYLE
  container: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 17,
    marginBottom: 10,
  },
  carousel: {
    width: width - 20,
    height: width / 2 + 100,
  },
  paginationContainer: {
    // paddingTop: 7,
    // paddingBottom: 1,
    //backgroundColor: 'lightgrey'
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    paddingVertical: 8,
    marginTop: width / 2,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
  },
});
