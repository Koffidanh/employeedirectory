import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import SearchForm from '../SearchForm'
import Table from "../Table";
// import Sort from "../Sort";




export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [sortEmployee, setSortEmployee] = useState(false);
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

    useEffect(() => {
        sortEmployee ? setEmployees(employees.sort((a, b) =>
            (a.name.first > b.name.first) ? 1 : -1)
        ) : setEmployees(employees.sort((a, b) =>
            (b.name.first > a.name.first) ? 1 : -1)
        ) 
    }, [])
    // useEffect(() => console.log(employees), [employees])
    // create a funtion handlsort, taking employees. sort 
    // let handleSort = [...employees]
    // console.log(employees)
    // if (sortField !== null) {

    // }
    // console.log(handleSort)
    // function sort(employees){
    //     let employeesCopy = [...employees.list];
    //     employeesCopy.sort((employees))
    //     setEmployees({...employees, list: employeesCopy})
    //   };
    function handleSort(employees) {
        sortEmployee ? setEmployees(employees.sort((a, b) =>
            (a.name.first > b.name.first) ? 1 : -1)
        ) : setEmployees(employees.sort((a, b) =>
            (b.name.first > a.name.first) ? 1 : -1)
        )
        console.log(employees)
    }
    return (
        <div>
            <SearchForm setSearch={setSearch} />
            {/* <Sort setSort={setSort} /> */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th><button onClick={() => handleSort(employees)}>
                            <i className={`fa fa-sort`} />
                        </button> Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        // employees.length > 0 &&
                        employees && employees.filter(employee =>
                            employee.name.first.toLowerCase().includes(search.toLowerCase()) ||
                            employee.name.last.toLowerCase().includes(search.toLowerCase()))
                            .map(employee => <Table
                                img={employee.picture.thumbnail}
                                first={employee.name.first}
                                last={employee.name.last}
                                phone={employee.phone}
                                email={employee.email}
                                location={employee.location.city}
                                key={employee.login.uuid}
                            />)}

                </tbody>

            </table>


        </div>
    )
}
