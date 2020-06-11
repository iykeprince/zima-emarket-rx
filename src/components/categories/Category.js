import React from "react";
import CategoryItem from "./CategoryItem";

const Category = ({ categories }) => {
  return categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));
};

export default Category;
