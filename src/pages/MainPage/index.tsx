import { Component } from "react";
import { RadialBarChart } from "recharts";
import { Page, RadialChartAll, SubjectBarChartAll, SubjectRadialBarChart } from '../../Components';

export class MainPage extends Component {
    render() {
        return (
            <Page name="home" style={{ display: 'grid', gridTemplateColumns: "50% 50%" }}>
                <SubjectBarChartAll />
                <RadialChartAll />
                <RadialBarChart />
            </Page>
        )
    }
}