import React from 'react'

const CategoryItem = ({category}) => {
    const {name, description, image} = category;
    return (
        <a href="#">
        <li className="cat">
          <i className="fa fa-car icon"></i>
          <span>{name}</span>
          <i className="fa fa-chevron-right c"></i>
        </li>
      </a>
    )
}

export default CategoryItem;