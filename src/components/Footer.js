import React from "react";
import { View } from "react-native";
import { footer } from "./styles";

export function Footer({ children }) {
  return <View style={footer.container}>{children}</View>;
}
