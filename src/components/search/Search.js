import React, { useState } from "react";
import './Search.css';

const Search = () => {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSearch = e => {
    e.preventDefault();
    console.log('search query', text);
  }

  return ( 
    <div className="header-search">
      <input
        type="text"
        value={text}
        onChange={onChange}
        placeholder="Find a market near you"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default Search;