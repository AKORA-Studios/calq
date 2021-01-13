import { Component } from "react";
import '../headline.css'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, AreaChart, Area } from 'recharts'
const data = [{ uv: 15 }, { uv: 2 }, { uv: 13 }, { uv: 6 }];
const data2 = [{ uv: 12 }, { uv: 4 }, { uv: 9 }, { uv: 10 }];
const DataSammlung = [{ name: 'Subject A', entr: data, color: '#5476f0' }, { name: 'Subject B', entr: data2, color: '#f52525' }]
const dataNodes = [{ name: 'Test UTF8', date: '01.03.20', points: '12', type: 'Big' },
{ name: 'Test VSC', date: '12.12.12', points: '3', type: 'Smal' },
{ name: 'Test Lorem Ipsum', date: '09.02.16', points: '4', type: 'Smal' }]

export class LineChartThing extends Component {
    render() {
        return (
            <div style={{ marginLeft: "5%", marginRight: "5%" }}>
                <br></br>
                { (DataSammlung.map(e => {
                    return <div className="subjectDiv" style={{ display: 'grid', gridTemplateColumns: "50% 50%" }}>
                        <div>
                            <h1 className="subjectName" style={{ textAlign: "left", marginLeft: "5%", color: e.color }}>{e.name}</h1>
                            <LineChart width={700} height={300} data={e.entr} >
                                <Line type="monotone" dataKey="uv" stroke={e.color} />
                                < CartesianGrid stroke="#ccc" strokeDasharray="6 6" vertical={false} horizontal={false} />
                                <YAxis type="number" domain={[0, 15]} tickCount={16} />
                                <XAxis />
                            </LineChart>
                        </div>


                        <div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            {(dataNodes.map(d => {
                                return <div className="subjectTestInfo" style={{ display: 'grid', gridTemplateColumns: "10% 50% 30% 10%" }}>
                                    <div className="AssigmnetType"> <p className="AssignmentTypeIcon">{d.type == 'Big' ? '🐯' : 'S'}</p> </div>
                                    <h1 className="subjectDescription" style={{ color: e.color }}>{(d.name).length > 20 ? (d.name).substr(0, 17) + '...' : d.name}</h1>

                                    <div style={{
                                        borderColor: 'white', borderLeftWidth: '1px', borderLeftStyle: 'solid', height: '3.5rem'
                                    }}>
                                        <h1 className="subjectDescription" style={{ color: "white" }}>{d.date}</h1>
                                    </div>

                                    <div className="assignmentPointsDiv" style={{ backgroundColor: e.color, height: '3.5rem' }}>
                                        <p className="AssigmentPoints" >{d.points}</p>
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