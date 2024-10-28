import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/category";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ setType }) => {
  const { data } = useQuery({
    queryKey: ["get All cats"],
    queryFn: getAllCategories,
  });

  console.log(data);

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <ScrollView horizontal={true}>
        <CategoryCard key={1} name={"All"} index={0} setType={setType} />
        {data?.map((category, index) => {
          return (
            <CategoryCard
              key={category._id}
              name={category.name}
              index={index}
              setType={setType}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryList;
