import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NAVIGATION from "../navigation";

const Product = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        width: 120,
        padding: 10,
        borderRadius: 10,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        navigation.navigate(NAVIGATION.HOME.PRODUCT_DETAILS, {
          id: product._id,
        });
      }}
    >
      <Image
        style={{ width: 100, height: 120 }}
        source={{
          uri:
            "https://react-native-mini-project-items.eapi.joincoded.com/" +
            product.image,
        }}
      />
      <Text>{product.name}</Text>
      <Text>{product.price} KWD</Text>
    </TouchableOpacity>
  );
};

export default Product;
