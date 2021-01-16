import { Component } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import '../components.css'

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
        name: 'SPA', points: 11, color: '#fab491', id: 7,
    },
    {
        name: 'GEO', points: 8, color: '#27b34a', id: 8,
    },

    {
        name: 'INF', points: 12, color: '#97a9d1', id: 9,
    },

    {
        name: 'ETH', points: 9, color: '#fce277', id: 10,
    },
    {
        name: 'KU', points: 7, color: '#9434d9', id: 11,
    },
    {
        name: 'MU', points: 13, color: '#d934b5', id: 12,
    },
];



export class SubjectBarChartAll extends Component {
    render() {
        return (
            <div className="mainPageContainer">
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="points" barSize={40} radius={4} > {data.map((entry, index) => (
                            <Cell fill={entry.color} />
                        ))} </Bar>
                        <Tooltip />

                        <XAxis dataKey="name" minTickGap={1} tickCount={2} tick={{ fill: '#ffffff' }} />
                        <YAxis domain={[0, 15]} minTickGap={0} tickCount={15} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}