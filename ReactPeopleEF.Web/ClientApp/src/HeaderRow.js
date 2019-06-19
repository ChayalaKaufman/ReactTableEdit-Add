import React from 'react';

class HeaderRow extends React.Component {
    render() {
        const {
            onInputChange,
            onAddClick,
            person,
        } = this.props;
        return (
            <div className="row">
                <div className="col-md-3">
                    <input name="firstName" value={person.firstName} onChange={onInputChange} className="form-control" placeholder="First Name"/>
                </div>
                <div className="col-md-3">
                    <input name="lastName" value={person.lastName} onChange={onInputChange} className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-md-3">
                    <input name="age" value={person.age} onChange={onInputChange} className="form-control" placeholder="Age" />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={onAddClick}>Add</button>
                </div>
            </div>);
    }
}

export default HeaderRow;