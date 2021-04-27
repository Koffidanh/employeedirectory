import React from "react";
//import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.table array
function Table(props) {
  return (
    <tr>
      <td>
{props.image}
      </td>
      <td>
      {props.name}
      </td>
      <td>
      {props.email}
      </td>
      <td>
      {props.location}
      </td>
    </tr>
     

    
    
  );
}

export default Table;
