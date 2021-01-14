import { Component } from "react";
import { Navbar, SubejctBarChartAll, RadialChartAll } from '../../Components'

export class MainPage extends Component {
    render() {
        return (
            <div >
                <Navbar></Navbar>
                <div style={{ display: 'grid', gridTemplateColumns: "50% 50%", marginTop: '5%' }}>
                    <div style={{ backgroundColor: '#242424', marginRight: '5%', marginLeft: '5%', borderRadius: '9%' }}>
                        <SubejctBarChartAll></SubejctBarChartAll>
                    </div>
                    <div style={{ backgroundColor: '#242424', marginRight: '5%', marginLeft: '5%', borderRadius: '9%' }}>
                        <RadialChartAll></RadialChartAll>
                    </div>

                </div>
            </div>
        )
    }
}