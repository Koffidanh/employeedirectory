import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import SearchForm from '../SearchForm'
import Table from "../Table/Index";

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("")
    useEffect(() => {
        API.getEmployee()
            .then((res) => setEmployees(res.data.results))
            // .then((data) => data.map(({ picture, name, phone, email, location }) => ({
            //     img: picture.thumbnail,
            //     first:name.first,
            //     last:name.last,
            //     phone,
            //     email,
            //     location,
            // })
            // )
            // ).then(arr => setEmployees(arr));
        

    }, []);

    useEffect(() => console.log(employees), [employees])

    return (
        <div>
            <SearchForm setSearch={setSearch} />
            <table className="table">
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        // employees.length > 0 &&
                        employees.map(employee => <Table
                            img={employee.picture.thumbnail}
                            first={employee.name.first}
                            last={employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            location={employee.location.city}
                        />)}

                </tbody>

            </table>


        </div>
    )
}
