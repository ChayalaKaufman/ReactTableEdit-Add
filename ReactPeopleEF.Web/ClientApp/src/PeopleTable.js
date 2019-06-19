import React, { Component } from 'react';
import PersonRow from './PersonRow';
import { withRouter } from 'react-router-dom';

 class PeopleTable extends Component {
    redirectToAdd = () => {
        this.props.history.push('/add');
    }
    render() {
        
        return (
            <div>
                <button className="btn btn-info" onClick={this.redirectToAdd}>Add Person</button>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>  
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.people.map(person =>
                        <PersonRow
                        onDeleteSingleClicked={this.props.onDeleteSingleClicked}
                        person={person} key={person.id} />)}
                </tbody>
                </table>
                </div>
        )
    }
}

export default withRouter(PeopleTable);

