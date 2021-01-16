import { Center } from "@chakra-ui/react";
import { Component } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import '../components.css'

const data = [
    {
        name: 'MA', points: 12, color: '#f52525', id: 1,
    },
    {
        name: 'ENG', points: 12, color: '#fcba03', id: 2,
    },
    {
        name: 'DE', points: 10, color: '#e195f0', id: 3,
    },
    {
        name: 'CHE', points: 5, color: '#070e40', id: 4,
    },
    {
        name: 'FRZ', points: 2, color: '#55cf9c', id: 5,
    },
    {
        name: 'BIO', points: 15, color: '#69cf55', id: 6,
    },
    {
        name: 'SPA', points: 13, color: '#f07f16', id: 7,
    },
];


export class RadialChartAll extends Component {
    render() {
        return (
            <Center size="50px" className="mainPageContainer">
                <ResponsiveContainer width={500} height={500}>
                    <RadarChart outerRadius={150} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" tick={{ fill: '#ffffff' }} />
                        {/*<PolarRadiusAxis domain={[0, 15]} />*/}
                        <Radar name="name" dataKey="points" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </Center>
        );
    }
}