import React from 'react'

export default function Table({img, first, last, phone, email, location}) {

    return (
        <tr>
           
            <td><img className="card-img-top" src={img} alt="profile" /></td>
            <td>{first} {last}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{location}</td>
        </tr>
    )
}