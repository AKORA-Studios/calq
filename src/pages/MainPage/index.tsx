import { Component } from "react";
import { Navbar, SubejctBarChartAll, RadialChartAll, Page } from '../../Components'

export class MainPage extends Component {
    render() {
        return (
            <Page style={{ display: 'grid', gridTemplateColumns: "50% 50%" }}>
                <SubejctBarChartAll />
                <RadialChartAll />
            </Page>
        )
    }
}