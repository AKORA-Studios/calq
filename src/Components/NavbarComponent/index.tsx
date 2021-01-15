import { Component } from "react";
import '../components.css';

const home = () => window.location.href = 'http://localhost:3000/';
const nothing = () => { }
const overview = () => window.location.href = 'http://localhost:3000/overview';

interface Props {
    type: string
}


export class Navbar extends Component<Props> {
    render() {
        return (
            <div className="navbar" style={{ display: 'grid', gridTemplateColumns: "15% 15% 40% 15% 15%", width: "100%", color: '#ed8b13', height: '4.5rem' }} >
                <div className="navbarButton" onClick={home}> <p className={this.props.type === 'main' ? "activeNavbarButtonText" : 'navbarButtonText'}>✉ HOME</p></div>
                <div className="navbarButton" onClick={overview}> <p className={this.props.type === 'overview' ? "activeNavbarButtonText" : 'navbarButtonText'}>OVERVIEW </p></div>
                <div className="navbarButtonTitle">  <h1 className="headline">NAVIGATION BAR</h1></div>
                <div className="navbarButton" onClick={nothing}> <p className="navbarButtonText">✚ ADD</p></div>
                <div className="navbarButton" onClick={nothing}> <p className="navbarButtonText">LOGIN</p></div>
            </div>
        )
    }
}