import { Component } from "react";
import { Navbar } from '../../Components'

export class AddPage extends Component {
    render() {
        return (
            <div >
                <Navbar type={'add'}></Navbar>
                <div style={{ display: 'grid', gridTemplateColumns: "50% 50%", marginTop: '5%' }}>
                    <div style={{ backgroundColor: '#242424', marginRight: '5%', marginLeft: '5%', borderRadius: '9%' }}>
                        <h1>sdfsdfsdf</h1>
                    </div>
                    <div style={{ backgroundColor: '#242424', marginRight: '5%', marginLeft: '5%', borderRadius: '9%' }}>
                        <h1>gfhfghfgh</h1>
                    </div>

                </div>
            </div>
        )
    }
}