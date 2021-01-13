import { Component } from "react";
import '../headline.css'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, AreaChart, Area } from 'recharts'
const data = [{ uv: 15 }, { uv: 2 }, { uv: 13 }, { uv: 6 }];
const data2 = [{ uv: 12 }, { uv: 4 }, { uv: 9 }, { uv: 10 }];
const DataSammlung = [{ name: 'Subject A', entr: data, color: '#5476f0' }, { name: 'Subject B', entr: data2, color: '#f52525' }]
const dataNodes = [{ name: 'Test UTF8', date: '12.12.12' }, { name: 'Test Soziale Frage', date: '12.12.12' }, { name: 'Test Rekursion', date: '12.12.12' }]

export class LineChartThing extends Component {
    render() {
        return (
            <div>

                { (DataSammlung.map(e => {
                    return <div className="subjectDiv" style={{ display: 'grid', gridTemplateColumns: "50% 50%" }}>
                        <div>
                            <h1 className="subjectName" style={{ textAlign: "left", marginLeft: "5%", color: e.color }}>{e.name}</h1>
                            <LineChart width={700} height={300} data={e.entr}>
                                <Line type="monotone" dataKey="uv" stroke={e.color} />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis type="number" domain={[0, 15]} />
                            </LineChart>
                        </div>


                        <div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            {(dataNodes.map(d => {
                                return <div className="subjectTestInfo" style={{ display: 'grid', gridTemplateColumns: "50% 50%" }}>
                                    <h1 className="subjectDescription" style={{ color: e.color }}>{d.name}</h1>
                                    <div style={{
                                        borderColor: 'white', borderLeftWidth: '1px', borderLeftStyle: 'solid'
                                    }}>
                                        <h1 className="subjectDescription" style={{ color: "white" }}>{d.date}</h1>
                                    </div>

                                </div>
                            }))}
                        </div>
                    </div>
                }))}
                <br></br>


            </div>
        )
    }
}