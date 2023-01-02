import React from "react";
import { View, TextInput } from "react-native";
import { search_bar } from "./styles";
import Icon from "@expo/vector-icons/Ionicons";

export function SearchBar(props) {
  return (
    <View style={search_bar.container}>
      <View style={search_bar.inputContainer}>
        <TextInput
          placeholder="Search By Categories..."
          onChangeText={props.onSearch}
        />
      </View>
      <Icon
        name="ios-search-outline"
        color="#353233"
        size={25}
        style={search_bar.iconContainer}
      />
    </View>
  );
}

