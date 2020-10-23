import React, { useState, useEffect } from 'react';
import './styles/SearchBar.css';


const SearchTag = ({ addTag }) => {
  const [tag, setTag] = useState('');

  const handleChange = (e) => {
    const inLowerCase = e.target.value.toLowerCase();
    setTag(inLowerCase);
  };

  useEffect(() => {
    const input = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    const expand = () => {
      searchBtn.classList.toggle("close");
      input.classList.toggle("square");
    };

    searchBtn.addEventListener("click", expand);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tag) return;
    console.log(tag);   // Show the word entered
    addTag(tag);
    setTag('');
  };

  return (
    <div>
      <form id="content" className="animate__animated animate__bounceInDown" onSubmit={handleSubmit}>
        <input type="text" name="search-input" id="search-input" onChange={handleChange} value={tag} />
        <button type="reset" className="search" id="search-btn"></button>
      </form>
    </div>
  )
};

export default SearchTag;