import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { produce } from 'immer';

class Add extends React.Component {

    onAddClick = () => {
        axios.post('/api/people/add', this.state.person).then(() => {
            this.props.history.push('/people');
        })
    }

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: '',
        }
    }

    onInputChange = e => {
        const newState = produce(this.state, draftState => {
            const { person } = draftState;
            person[e.target.name] = e.target.value;
        });
        this.setState(newState);
    }

    render() {
        
        return (
            <div className="container">
                <h2>Add Person</h2>
                <div className="row">
                    <div className="col-md-3">
                        <input name="firstName" onChange={this.onInputChange} className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-3">
                        <input name="lastName" onChange={this.onInputChange} className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-md-3">
                        <input name="age" onChange={this.onInputChange} className="form-control" placeholder="Age" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={this.onAddClick}>Add</button>
                    </div>
                </div>
            </div>);
    }
}

export default withRouter(Add);