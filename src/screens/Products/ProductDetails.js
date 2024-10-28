import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../api/product";

const ProductDetails = ({ route }) => {
  const { id } = route.params;
  const { data } = useQuery({
    queryKey: ["Get product by id"],
    queryFn: () => getProductById(id),
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text>{id}</Text>
      <Text>{data?.name}</Text>
      <Image
        source={{
          uri:
            "https://react-native-mini-project-items.eapi.joincoded.com/" +
            data?.image,
        }}
        width={100}
        height={100}
      />
      <Text>{data?.price}</Text>

      <TouchableOpacity
        onPress={() => {
          alert("Bought!");
        }}
        style={{
          backgroundColor: "purple",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Purchase
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;
