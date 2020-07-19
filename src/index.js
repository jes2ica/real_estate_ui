import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './components/details';
import Home from './components/home';
import Listings from './components/listings';
import Login from './components/login';
import Register from './components/register';


class Root extends Component {
    render() {
        return(
            <Router>
                <div>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/details" component={Details} />
                      <Route exact path="/listings" component={Listings} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Register} />
                  </Switch>
                </div>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('root'));
