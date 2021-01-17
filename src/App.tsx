import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { MainPage, OverviewPage, AddPage, LoginPage, RegisterPage } from './pages'

function App() {
    return (
        <Router>
            < Switch >
                < Route path="/" exact component={MainPage} />
                < Route path="/add" exact component={AddPage} />
                < Route path="/login" exact component={LoginPage} />
                < Route path="/register" exact component={RegisterPage} />
                < Route path="/overview" exact component={OverviewPage} />
                < Route path="*" exact component={MainPage} />
            </Switch >
        </Router>
    );
}

export default App;
