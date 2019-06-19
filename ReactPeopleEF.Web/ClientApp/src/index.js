import React from 'react';
import { render } from 'react-dom';
import PeoplePage from './PeoplePage';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import Add from './add';
import Edit from './Edit';


class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/people' component={PeoplePage} />
                <Route exact path='/add' component={Add} />
                <Route path='/edit/:id?' component={Edit} />
            </div>
        );
    }
}

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));