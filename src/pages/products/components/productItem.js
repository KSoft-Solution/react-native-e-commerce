import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { product_item } from "./style";

export default function ProductItem({ item, onSelect }) {
  return (
    <TouchableOpacity style={product_item.container} onPress={onSelect}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: item.image }} style={product_item.image} />
      </View>
      <View style={product_item.title_container}>
        <Text style={product_item.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={product_item.price}>{item.price} $</Text>
      </View>
    </TouchableOpacity>
  );
}
