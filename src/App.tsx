import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './pages'
import { grey } from './colors.json'

function App() {
    return (
        <div className="App">
            <MainPage></MainPage>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>

        </div>
    );
}

export default App;
