import { Component } from "react";
import { Link } from "react-router-dom";

interface Props {
    name?: string
}

interface State {

}

export class Navbar extends Component<Props, State> {
    current(name: string) {
        if (this.props.name === name) return "selected";
        return "";
    }

    render() {
        return (
            <header className="navbar" >
                <Link to="/" className={this.current("home")}>HOME</Link>
                <Link to="/overview" className={this.current("overview")}>ÜBERSICHT</Link>
                <p> CALQ </p>
                <Link to="/add" className={this.current("add")}>✚ ADD</Link>
                <Link to="/login" className={this.current("login")}>LOGIN</Link>
            </header>
        )
    }
}