import React from "react";
import { Text, Image, View, Alert } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Swipeout from "react-native-swipeout";
import * as Animatable from "react-native-animatable";
import { product_item } from "./styles";

export default function FavoriteItem({ item, onRemove }) {
  const rightButton = [
    {
      text: "Delete",
      type: "delete",
      onPress: () => {
        Alert.alert(
          "Delete Favorite?",
          "Are you sure you wish to delete the favorite dish " +
            item.title +
            "?",
          [
            {
              text: "Cancel",
              onPress: () => console.log(item.title + "Not Deleted"),
              style: " cancel",
            },
            {
              text: "OK",
              onPress: () => onRemove(),
            },
          ],
          { cancelable: false }
        );
      },
    },
  ];
  return (
    <Swipeout right={rightButton} autoClose={true}>
      <Animatable.View
        animation="fadeInRightBig"
        duration={2000}
        style={{ backgroundColor: "#eceff1" }}
      >
        <View style={product_item.container}>
          <Image style={product_item.image} source={{ uri: item.image }} />
          <Text style={product_item.text} numberOfLines={2}>
            {item.title}
          </Text>
          <Icon
            style={{ alignSelf: "flex-end" }}
            name="heart"
            size={25}
            color="tomato"
          />
        </View>
      </Animatable.View>
    </Swipeout>
  );
}
