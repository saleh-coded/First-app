import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import NAVIGATION from "../../navigation";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../api/auth";
import UserContext from "../../context/UserContext";

const Register = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="First Name"
        style={styles.InputStyle}
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, firstName: text });
        }}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.InputStyle}
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, lastName: text });
        }}
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.InputStyle}
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, phoneNumber: text });
        }}
      />
      <TextInput
        placeholder="Password"
        style={styles.InputStyle}
        onChangeText={(text) => {
          setUserInfo({ ...userInfo, password: text });
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => {
          console.log(userInfo);
          mutate();
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          REGSITER
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 10,
        }}
        onPress={() => {
          navigation.navigate(NAVIGATION.AUTH.LOGIN);
        }}
      >
        <Text>Already have an account? LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  InputStyle: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 150,
    marginBottom: 10,
  },
});
