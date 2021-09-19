import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar } from './Navbar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
  
export const AppRouter = () => {
    return (
        <Router>
            <div>                
                <Navbar />
                
                <Switch>
                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/about" component={ AboutScreen } />
                    <Route exact path="/login" component={ LoginScreen } />
                </Switch>
            </div>
        </Router>
    )
}
