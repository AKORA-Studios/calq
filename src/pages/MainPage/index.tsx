import { Component } from "react";
import { Navbar, SubejctBarChartAll, RadialChartAll } from '../../Components'

export class MainPage extends Component {
    render() {
        return (
            <div >
                <Navbar></Navbar>
                <div style={{ display: 'grid', gridTemplateColumns: "50% 50%", marginTop: '5%' }}>
                    <SubejctBarChartAll></SubejctBarChartAll>
                    <RadialChartAll></RadialChartAll>
                </div>
            </div>
        )
    }
}