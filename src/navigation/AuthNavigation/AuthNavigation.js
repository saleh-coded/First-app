import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Auth/Login";
import Register from "../../screens/Auth/Register";
import NAVIGATION from "..";

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name={NAVIGATION.AUTH.LOGIN} component={Login} />
      <Stack.Screen name={NAVIGATION.AUTH.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
