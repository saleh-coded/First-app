import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ name, index, setType }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        width: 100,
        padding: 5,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: index % 2 ? "grey" : "white",
      }}
      onPress={() => (name === "All" ? setType("") : setType(name))}
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
