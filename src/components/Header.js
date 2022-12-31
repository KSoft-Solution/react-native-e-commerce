import React from "react";
import { View, Text } from "react-native";
import { header } from "./styles";

export function Header({ title }) {
  return (
    <View style={header.container}>
      <Text style={header.text}>{title}</Text>
    </View>
  );
}
