import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { MainPage, OverviewPage } from './pages'
import { Navbar } from './Components'

function App() {
    return (
        <div >
            <Router>
                < Switch >
                    < Route path="/" exact={true} component={MainPage} />
                    < Route path="/overview" exact={true} component={OverviewPage} />
                    < Route path="*" exact={true} component={MainPage} />
                </Switch >
            </Router>
        </div>

    );
}

export default App;
