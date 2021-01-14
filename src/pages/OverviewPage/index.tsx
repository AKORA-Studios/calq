import { Component } from "react";
import { Navbar, AreaChartSubjects } from '../../Components'

export class OverviewPage extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="headDiv">
                    <AreaChartSubjects></AreaChartSubjects>
                </div>
            </div>

        )
    }
}