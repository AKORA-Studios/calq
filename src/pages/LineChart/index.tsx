import { Component } from "react";
import '../headline.css'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from 'recharts'
const data = [{ uv: 15 }, { uv: 2 }, { uv: 13 }, { uv: 6 }];

export class LineChartThing extends Component {
    render() {
        return (
            <div className="headDiv">


                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                <h1 className="headline" style={{ textAlign: "left", marginLeft: "5%" }}>Mathematiiik</h1>


            </div>
        )
    }
}