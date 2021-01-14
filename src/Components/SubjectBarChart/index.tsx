import { Component, } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts'

const data = [
    {
        name: 'MA', points: 12, color: '#3439d9', id: 1,
    },
    {
        name: 'ENG', points: 12, color: '#a11f1f', id: 2,
    },
    {
        name: 'DE', points: 10, color: '#e32b2b', id: 3,
    },
    {
        name: 'CHE', points: 5, color: '#070e40', id: 4,
    },
    {
        name: 'FRZ', points: 2, color: '#fab491', id: 5,
    },
    {
        name: 'BIO', points: 15, color: '#34d942', id: 6,
    },
    {
        name: 'SPA', points: 13, color: '#fab491', id: 7,
    },
    {
        name: 'GEO', points: 13, color: '#27b34a', id: 7,
    },
];



export class SubejctBarChartAll extends Component {
    render() {
        return (
            <div style={{ marginLeft: "5%", marginRight: "5%" }}>

                <BarChart width={600} height={400} data={data}>

                    <Bar dataKey="points" barSize={50} radius={4} > {data.map((entry, index) => (
                        <Cell fill={entry.color} />
                    ))} </Bar>
                    <Tooltip />
                    <XAxis dataKey="name" minTickGap={1} tickCount={2} tick={{ fill: '#ffffff' }} />
                    < YAxis domain={[0, 15]} minTickGap={0} tickCount={15} />

                </BarChart>
                <br />


            </div>
        )
    }
}