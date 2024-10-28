import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NAVIGATION from "..";
import Profile from "../../screens/Profile/Profile";

const Stack = createNativeStackNavigator();
const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.PROFILE.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({});
