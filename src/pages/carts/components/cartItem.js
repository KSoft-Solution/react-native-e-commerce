import React from "react";
import { View, TouchableWithoutFeedback, Text, Image } from "react-native";
import { cart_item } from "./styles";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export function CartItem({ item, onDelete }) {
  return (
    <TouchableWithoutFeedback>
      <View style={cart_item.container}>
        <Image
          source={{ uri: item.image }}
          style={cart_item.image}
          resizeMode="contain"
        />
        <View style={cart_item.details_container}>
          <Text style={cart_item.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={cart_item.price}>{item.price} $</Text>
        </View>
        <Icon
          style={{ alignSelf: "flex-end" }}
          name="delete"
          color="tomato"
          size={30}
          onPress={onDelete}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
