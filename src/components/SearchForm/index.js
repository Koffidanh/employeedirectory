import React from "react";

import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employees array
function SearchForm(props) {
  const handleOnChange = (evt) => {

  }
  return (
    <div>
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input type="text"
          className="form-control" onChange={handleOnChange} name="search" id="" aria-describedby="helpId" placeholder="Search Employee"/>
        
      </div>
      </div>
  );
}

export default SearchForm;
