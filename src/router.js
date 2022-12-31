import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Products, Carts } from "./pages";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductScreen" component={Products} />
      <Stack.Screen name="CartScreen" component={Carts} />
    </Stack.Navigator>
  );
};

const Routing = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="StackRoute"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => setIcon(focused, color, route),
          tabBarLabel: ({ color }) => setLabel(color, route),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="StackRoute" component={StackRoute} />
        <Tab.Screen name="CartScreen" component={Carts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routing;

function setIcon(focused, color, route) {
  let iconName;

  switch (route.name) {
    case "CartScreen":
      iconName = focused ? "cart" : "cart-outline";
      break;
    case "StackRoute":
      iconName = focused ? "view-list" : "view-list-outline";
      break;
    case "FavoritesScreen":
      iconName = focused ? "heart" : "heart-outline";
      break;

    default:
      break;
  }
  return <Icon name={iconName} color={color} size={30} />;
}

function setLabel(color, route) {
  let label;

  switch (route.name) {
    case "CartScreen":
      label = "Carts";
      break;
    case "StackRoute":
      label = "Home";
      break;
    case "FavoritesScreen":
      label = "Favorilerim";
      break;

    default:
      break;
  }
  return <Text style={{ color: color }}>{label}</Text>;
}
