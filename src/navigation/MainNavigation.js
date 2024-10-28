import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation/HomeNavigation";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";
import NAVIGATION from ".";
import CreateProduct from "../screens/Products/CreateProduct";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={NAVIGATION.HOME.INDEX} component={HomeNavigation} />
      <Tab.Screen
        name={NAVIGATION.HOME.CREATE_PRODUCT}
        component={CreateProduct}
      />
      <Tab.Screen
        name={NAVIGATION.PROFILE.INDEX}
        component={ProfileNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
