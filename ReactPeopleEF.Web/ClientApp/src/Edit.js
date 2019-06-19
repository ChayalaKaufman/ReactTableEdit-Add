import React from 'react';
import { produce } from 'immer';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Edit extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: '',
            id: 0
        },
        people: []
    }
    onInputChange = e => {
        const newState = produce(this.state, draftState => {
            const { person } = draftState;
            person[e.target.name] = e.target.value;
        });
        this.setState(newState);
    }
    componentDidMount = () => {
        const id = this.props.match.params.id;
        
        if (id) {
            
            axios.get(`/api/people/getPerson?id=${id}`).then(({ data }) => {
                this.setState({ person: data });
            });
        }
        else {
            axios.get('/api/people/getAll').then(({ data }) => {
                this.setState({ people: data });
            });
        }
    }

    onUpdateClick = () => {
        
        axios.post('/api/people/update', this.state.person).then(() => {
            this.props.history.push('/people');
        });
    }

    onSelectChange = e => {
        if (e.target.value !== 0) {
            const id = e.target.value;
            
            axios.get(`/api/people/getPerson?id=${id}`).then(({ data }) => {
                this.setState({ person: data });
                this.props.history.push(`/edit?id=${data.id}`)
            });
        }
    }

    render() {
        let contents;
        if (this.state.person.id) {
            contents = <div className="well col-md-offset-2 col-md-6">
                <h2>Edit Person</h2>
                <div className="row">
                    <div className="col-md-3">
                        <input name="firstName" value={this.state.person.firstName} onChange={this.onInputChange} className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-3">
                        <input name="lastName" value={this.state.person.lastName} onChange={this.onInputChange} className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-md-3">
                        <input name="age" value={this.state.person.age} onChange={this.onInputChange} className="form-control" placeholder="Age" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={this.onUpdateClick}>Save Changes</button>
                    </div>
                </div>
            </div>
        }
        else {
            contents =
                <div className="well col-md-offset-4 col-md-4">
                <select className="form-control" onChange={this.onSelectChange}>
                <option value={0}>--Choose a Person to Edit--</option>
                {this.state.people.map(p => <option key={p.id}
                    value={p.id}>{p.firstName + ' ' + p.lastName}</option>)}
                </select>
                </div>
        }
        return (
            <div>
                {contents}
            </div>
        )
    }
}

export default withRouter(Edit);