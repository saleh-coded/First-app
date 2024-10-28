import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../../api/product";
const CreateProduct = () => {
  const [productInfo, setProductInfo] = useState({});
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProductInfo({ ...productInfo, image: result.assets[0].uri });
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["create product"],
    mutationFn: () => createProduct("655cb667d7cc3db5750dc52f", productInfo),
    onSuccess: () => {
      alert("product created");
    },
    onError: (err) => {
      alert(err);
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
        placeholder="name"
        onChangeText={(text) => {
          setProductInfo({ ...productInfo, name: text });
        }}
      />
      <TextInput
        placeholder="price"
        onChangeText={(text) => {
          setProductInfo({ ...productInfo, price: text });
        }}
      />
      <TextInput
        placeholder="description"
        onChangeText={(text) => {
          setProductInfo({ ...productInfo, description: text });
        }}
      />

      <Button title="Pick An Image" onPress={pickImage} />
      <TouchableOpacity
        style={{
          marginTop: 20,
        }}
        onPress={() => {
          console.log(productInfo);
          mutate();
        }}
      >
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({});
