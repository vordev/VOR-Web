import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    HomeComposition,
    RandomVerifyComposition,
} from 'compositions';

import 'assets/scss/index.scss';

class MainScreen extends Component {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={HomeComposition} />
                    <Route path='/random/verify' exact={true} component={RandomVerifyComposition} />
                </Switch>
            </Router>
        );
    }
}

export default MainScreen;