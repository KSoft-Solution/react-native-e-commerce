import React from "react";
import { View, Text } from "react-native";
import { history_item } from "./styles";

export function HistoryItem({ item }) {
  return (
    <View style={history_item.container}>
      <View style={history_item.item_container}>
        {item.Order.map((i) => (
          <Text style={history_item.item} numberOfLines={1} key={i}>
            * {i}
          </Text>
        ))}
      </View>
      <View style={history_item.price_conteiner}>
        <Text style={history_item.price_title}>Toplam Tutar:</Text>
        <Text style={history_item.price}>{item.TotalPrice} $</Text>
      </View>
    </View>
  );
}
