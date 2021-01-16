import { Component } from "react";
import { Page, RadialChartAll, SubejctBarChartAll, SubjectRadialBarChart } from '../../Components';

export class MainPage extends Component {
    render() {
        return (
            <Page name="home" style={{ display: 'grid', gridTemplateColumns: "50% 50%" }}>
                <SubejctBarChartAll />
                <RadialChartAll />
                <SubjectRadialBarChart />
            </Page>
        )
    }
}