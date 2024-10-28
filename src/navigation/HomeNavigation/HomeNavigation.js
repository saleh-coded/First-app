import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NAVIGATION from "..";
import Home from "../../screens/Products/Home";
import ProductDetails from "../../screens/Products/ProductDetails";

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.HOME.HOME} component={Home} />
      <Stack.Screen
        name={NAVIGATION.HOME.PRODUCT_DETAILS}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
