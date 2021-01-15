import { Component } from "react";
import { Link } from "react-router-dom";
import '../components.css';

interface Props {
    type: string
}


export class Navbar extends Component<Props> {
    render() {
        return (
            <div className="navbar" style={{ display: 'grid', gridTemplateColumns: "15% 15% 40% 15% 15%", width: "100%", color: '#ed8b13', height: '4.5rem' }} >
                <Link to="/" className="navbarButton"> <p className={this.props.type === 'main' ? "activeNavbarButtonText" : 'navbarButtonText'}>✉ HOME</p></Link>
                <Link to="/overview" className="navbarButton"> <p className={this.props.type === 'overview' ? "activeNavbarButtonText" : 'navbarButtonText'}>OVERVIEW </p></Link>
                <div className="navbarButtonTitle">  <h1 className="headline">NAVIGATION BAR</h1></div>
                <Link to="/" className="navbarButton" > <p className="navbarButtonText">✚ ADD</p></Link>
                <Link to="/" className="navbarButton" > <p className="navbarButtonText">LOGIN</p></Link>
            </div>
        )
    }
}