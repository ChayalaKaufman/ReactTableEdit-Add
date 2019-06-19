import React from 'react';
import Add from './add';
import { produce } from 'immer';
import axios from 'axios';
import PeopleTable from './PeopleTable';

class PeoplePage extends React.Component {
    state = {
        people: []
    }

    componentDidMount = () => {
        axios.get('/api/people/getall').then(({ data }) => {
            this.setState({ people: data });
        });
    }
    

    onDeleteSingleClicked = (person) => {
        axios.post('/api/people/delete', person).then(() => {
            const copy = [...this.state.people];
            const filtered = copy.filter(p => p.id !== person.id);
            this.setState({ people: filtered });
        });
    }

    render() {
        const { person, people } = this.state;
        return (
            <div className="container" style={{ marginTop: 40 }}>
                
                <PeopleTable
                    people={people}
                    onDeleteSingleClicked={this.onDeleteSingleClicked}
                    onInputChange={this.onInputChange}
                    onAddClick={this.onAddClick}
                />
            </div>
        )
    }
}

export default PeoplePage;
