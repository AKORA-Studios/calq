import { Component } from "react";
import '../headline.css'

const home = () => window.location.href = 'http://localhost:3000/';
const nothing = () => { }
const overview = () => window.location.href = 'http://localhost:3000/overview';

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar" style={{ display: 'grid', gridTemplateColumns: "15% 15% 55% 15%", width: "100%", color: '#ed8b13', height: '4.5rem' }} >
                <div className="navbarButton" onClick={home}> <p className="navbarButtonText"> HOME </p></div>
                <div className="navbarButton" onClick={overview}> <p className="navbarButtonText"> OVERVIEW </p></div>
                <div className="navbarButton">  <h1 className="headline">NAVIGATION BAR</h1></div>
                <div className="navbarButton" onClick={nothing}> <p className="navbarButtonText"> LOGIN </p></div>
            </div>
        )
    }
}