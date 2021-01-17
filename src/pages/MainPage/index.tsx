import { Divider } from "@chakra-ui/react";
import { Component } from "react";
import { Page, RadialChartAll, SubjectBarChartAll, SubjectRadialBarChart } from '../../Components';


export class MainPage extends Component {
    render() {
        return (
            <Page name="home" style={{ display: 'grid', gridTemplateColumns: "1fr 1.5fr", gridTemplateRows: "1fr 1fr" }}>

                <SubjectBarChartAll />

                <div className="mainPageContainer" >
                    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr 1fr", paddingLeft: '4%' }}>
                        <SubjectRadialBarChart name={'DE'} points={14} color={'#f52525'} />
                        <SubjectRadialBarChart name={'MA'} points={4} color={'#3439d9'} />
                        <SubjectRadialBarChart name={'ENG'} points={8} color={'#a11f1f'} />
                        <SubjectRadialBarChart name={'ENG'} points={8} color={'#a11f1f'} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <Divider style={{ marginLeft: '5%', width: '95%' }}   ></Divider>
                    <br />

                    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr 1fr", paddingLeft: '4%' }}>
                        <SubjectRadialBarChart name={'SPA'} points={11} color={'#27b34a'} />
                        <SubjectRadialBarChart name={'SPA'} points={11} color={'#27b34a'} />
                        <SubjectRadialBarChart name={'ETH'} points={7} color={'#683c78'} />
                        <SubjectRadialBarChart name={'BIO'} points={13} color={'#34d942'} />
                    </div>
                </div>

                <RadialChartAll />




                <div className="mainPageContainer" >
                    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr 1fr", paddingLeft: '4%' }}>
                        <SubjectRadialBarChart name={'DE'} points={14} color={'#f52525'} />
                        <SubjectRadialBarChart name={'MA'} points={4} color={'#3439d9'} />
                        <SubjectRadialBarChart name={'ENG'} points={8} color={'#a11f1f'} />
                        <SubjectRadialBarChart name={'ENG'} points={8} color={'#a11f1f'} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <Divider style={{ marginLeft: '5%', width: '95%' }}   ></Divider>
                    <br />

                    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr 1fr", paddingLeft: '4%' }}>
                        <SubjectRadialBarChart name={'SPA'} points={11} color={'#27b34a'} />
                        <SubjectRadialBarChart name={'SPA'} points={11} color={'#27b34a'} />
                        <SubjectRadialBarChart name={'ETH'} points={7} color={'#683c78'} />
                        <SubjectRadialBarChart name={'BIO'} points={13} color={'#34d942'} />
                    </div>
                </div>



            </Page>
        )
    }
}