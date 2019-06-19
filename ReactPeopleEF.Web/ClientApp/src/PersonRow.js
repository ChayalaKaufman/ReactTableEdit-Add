import React from 'react';
import { Link } from 'react-router-dom';

export default function PersonRow({ person, onDeleteSingleClicked }) {
    return (
        <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
            <td><button className="btn btn-danger" onClick={() => onDeleteSingleClicked(person)}>Delete</button></td>
            <td>
                <Link to={`/edit/${person.id}`}>
                    <button className='btn btn-info'>Edit</button>
                </Link>
            </td>
        </tr>
    )
}