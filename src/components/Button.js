import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { custom_button } from "./styles";

export function CustomButton({ title, onClick }) {
  return (
    <TouchableOpacity style={custom_button.container} onPress={onClick}>
      <Text style={custom_button.text}>{title}</Text>
    </TouchableOpacity>
  );
}
