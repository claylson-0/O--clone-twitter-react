import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import AreaSignIn from './components/landing-page/AreaSignIn'
import AreaSignUp from './components/landing-page/AreaSignUp'
import Home from './components/home-page/Home';
const App = () => {
    return (
        <Router>
            <Route
                path="/"
                exact
                render={() => (
                    <div className="landing-page">
                        <div className="div-logo">
                        </div>
                        <div className="div-login">
                            <AreaSignIn></AreaSignIn>
                            <AreaSignUp></AreaSignUp>
                        </div>
                    </div>
                )}
            />
            <Route
            path="/home"
            exact
            component={Home}
            />
        </Router>
    );
}

export default App;