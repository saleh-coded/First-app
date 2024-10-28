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
import { login } from "../../api/auth";
import UserContext from "../../context/UserContext";

const Login = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
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
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => {
          mutate();
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 10,
        }}
        onPress={() => {
          navigation.navigate(NAVIGATION.REGISTER);
        }}
      >
        <Text>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  InputStyle: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 150,
    marginBottom: 10,
  },
});
