import { Component } from "react";
import { Link } from "react-router-dom";
import '../components.css';

interface Props {
    type: string
}


export class Navbar extends Component<Props> {
    render() {
        return (
            <header className="navbar" >
                <Link to="/" className={"navbarButton"}>✉ HOME</Link>
                <Link to="/overview" className={"navbarButton"}> OVERVIEW </Link>
                <div > CALQ </div>
                <Link to="/" className={"navbarButton"} >✚ ADD</Link>
                <Link to="/" className={"navbarButton"} >LOGIN</Link>
            </header>
        )
    }
}