import { Component } from "react";
import { Navbar, LineChartThing } from '../../Components'

export class OverviewPage extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="headDiv">
                    <LineChartThing></LineChartThing>
                </div>
            </div>

        )
    }
}