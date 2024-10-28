import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import CategoryList from "../../component/CategoryList";
import Product from "../../component/Product";
import ProductList from "../../component/ProductList";

const Home = () => {
  const [type, setType] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          margin: 10,
        }}
      >
        <TextInput
          placeholder="Search"
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "lightgrey",
          }}
        />
      </View>
      <CategoryList setType={setType} />
      <ProductList type={type} />
    </View>
  );
};

export default Home;
