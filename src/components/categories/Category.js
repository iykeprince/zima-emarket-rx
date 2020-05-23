import React from "react";
import CategoryItem from './CategoryItem';

const Category = ({categories}) => {
  return (
    <ul className="cat-body">
      <li className="cat cat1">Categories</li>
      {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Category;
