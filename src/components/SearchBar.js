import React, { useState } from 'react'

const SearchTag = ({ addTag }) => {
  const [tag, setTag] = useState('');

  const handleChange = (e) => {
    setTag(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tag) return;
    console.log(tag);
    addTag(tag);
    setTag('');
  }

  return (
    <div>
      <form className="animate__animated animate__bounceInDown" onSubmit={handleSubmit}>
        <label htmlFor="inputTag">Search by Tag:</label><br />
        <input type="text" id="inputTag" onChange={handleChange} value={tag} />
      </form>
    </div>
  )
}

export default SearchTag;