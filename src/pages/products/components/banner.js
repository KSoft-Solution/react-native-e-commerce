import React from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { banner } from "./style";

const Banner = ({ categories, onPress }) => {
  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <ImageBackground
        source={require("../../../assets/shop.jpg")}
        style={banner.image_background}
        imageStyle={banner.image}
      >
        <Text style={banner.text}>{item}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={categories}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderProduct}
        horizontal
      />
    </SafeAreaView>
  );
};

export default Banner;
