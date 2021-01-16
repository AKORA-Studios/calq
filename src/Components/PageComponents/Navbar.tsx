import { Component } from "react";
import { Link } from "react-router-dom";


export class Navbar extends Component {
    render() {
        return (
            <header className="navbar" >
                <Link to="/" className={"navbarButton"} >HOME</Link>
                <Link to="/overview" className={"navbarButton"} >ÜBERSICHT</Link>
                <div > CALQ </div>
                <Link to="/add" className={"navbarButton"} >✚ ADD</Link>
                <Link to="/login" className={"navbarButton"} >LOGIN</Link>
            </header>
        )
    }
}