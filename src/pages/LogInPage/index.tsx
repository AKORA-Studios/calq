import { Component } from "react";
import { Navbar, Page } from '../../Components'

export class LoginPage extends Component {
    render() {
        return (
            <Page style={{ display: 'grid', gridTemplateColumns: "50% 50%", marginTop: '5%', color: 'white' }}>
                <div style={{ backgroundColor: '#242424', marginRight: '5%', marginLeft: '5%', borderRadius: '9%' }}>
                    <h1>Elit aliquip esse culpa do labore mollit aute commodo aute aute cillum ut enim.</h1>
                </div>
                <div style={{ backgroundColor: '#242424', marginRight: '5%', marginLeft: '5%', borderRadius: '9%' }}>
                    <h1>Ipsum nostrud cillum adipisicing ipsum dolor qui.</h1>
                </div>

            </ Page>
        )
    }
}