import { Component } from "react";
import { Navbar, SubejctBarChartAll, RadialChartAll, Page } from '../../Components'

export class MainPage extends Component {
    render() {
        return (
            <Page style={{ display: 'grid', gridTemplateColumns: "50% 50%" }}>
                <div style={{ backgroundColor: '#242424', marginRight: '5%', marginLeft: '5%', borderRadius: '9%' }}>
                    <SubejctBarChartAll></SubejctBarChartAll>
                </div>
                <div style={{ backgroundColor: '#242424', marginRight: '5%', marginLeft: '5%', borderRadius: '9%' }}>
                    <RadialChartAll></RadialChartAll>
                </div>

            </Page>
        )
    }
}