import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/product";
import Product from "./Product";

const ProductList = ({ type }) => {
  const { data } = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: getAllProducts,
  });

  
  console.log(data);

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          margin: 10,
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Products
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 20,
        }}
      >
        {data
          ?.filter((product) => product.category.includes(type))
          .map((product) => {
            return <Product key={product._id} product={product} />;
          })}
      </View>
    </ScrollView>
  );
};

export default ProductList;
