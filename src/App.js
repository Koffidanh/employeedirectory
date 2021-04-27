import React, { useState , useEffect } from "react";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import SearchResults from "./components/SearchResults";
import API from "./utils/API";


function App() {
  const [employee, setEmployee] = useState([{}])
  
useEffect(() => {
  // if (!search) {
  //   return;
  // }
API.getEmployeesList.then((res) => {
  setEmployee(res);
  
  console.log(employee);
  
})
}, []
);

  return (
    <>
      <div>
       
       
        <table>
        <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Email <button className='filter' ><i className="fas fa-filter"></i></button></th>
        <th>Location <button className='filter' ><i className="fas fa-filter"></i></button></th>
      </tr>
      <tbody></tbody>

          </table> 
       
      </div>
    </>
  );
}

export default App;
