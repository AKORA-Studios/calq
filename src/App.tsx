import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage, LineChartThing } from './pages'
import { grey } from './colors.json'

function App() {
    return (
        <div className="App">
            <MainPage></MainPage>
            <LineChartThing></LineChartThing>
        </div>
    );
}

export default App;
