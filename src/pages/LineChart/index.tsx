import { Component } from "react";
import '../headline.css'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, AreaChart, Area } from 'recharts'
const data = [{ uv: 15 }, { uv: 2 }, { uv: 13 }, { uv: 6 }];
const data2 = [{ uv: 12 }, { uv: 4 }, { uv: 9 }, { uv: 10 }];
const DataSammlung = [{ name: 'Subject A', entr: data, color: '#5476f0' }, { name: 'Subject B', entr: data2, color: '#f52525' }]

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

                        <h1 className="subjectDescription" style={{ color: e.color }}>dfsdf</h1>
                        {/*
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10, right: 30, left: 0, bottom: 0,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#ed8b13" fill="#ed8b13" />
                        </AreaChart>
                        */}
                    </div>
                }))}
                <br></br>

            </div>
        )
    }
}