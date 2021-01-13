import { Component } from "react";
import '../headline.css'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from 'recharts'
const data = [{ uv: 15 }, { uv: 2 }, { uv: 13 }, { uv: 6 }];
const data2 = [{ uv: 12 }, { uv: 4 }, { uv: 9 }, { uv: 10 }];
const DataSammlung = [{ name: 'AAAA', entr: data }, { name: 'BBB', entr: data2 }]

export class LineChartThing extends Component {
    render() {
        return (
            <div>
                { (DataSammlung.map(e => {
                    return <div className="headDiv">
                        <h1 className="subjectName" style={{ textAlign: "left", marginLeft: "5%" }}>{e.name}</h1>
                        <LineChart width={600} height={300} data={e.entr}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                        <br></br>
                    </div>
                }))}


            </div>
        )
    }
}