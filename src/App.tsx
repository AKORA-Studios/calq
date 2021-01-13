import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage, LineChartThing } from './pages'
import { Navbar } from './Components'
import { grey } from './colors.json'

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <LineChartThing></LineChartThing>
        </div>

    );
}

export default App;
