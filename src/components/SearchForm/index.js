import React from "react";

import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employees array
function SearchForm({setSearch}) {
  const handleOnChange = (evt) => {
    setSearch(evt.target.value)
console.log(evt.target.value)
  }
  return (
    <div>
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input type="text"
          className="form-control" onChange={handleOnChange} name="search" id="" aria-describedby="helpId" placeholder="Search Employee Here"/>
        
      </div>
      </div>
  );
}

export default SearchForm;
