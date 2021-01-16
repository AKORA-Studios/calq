import { Center } from "@chakra-ui/react";
import { Component } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import '../components.css'

const data =
{
    name: 'MA', points: 12, color: '#f52525', id: 1,
}


export class SubjectRadialBarChart extends Component {
    render() {
        return (

            <ResponsiveContainer width={500} height={500}>

                <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={[data]}>
                    <RadialBar label={{ position: 'insideStart', fill: '#fff' }} dataKey="points" />
                </RadialBarChart>
            </ResponsiveContainer>

        );
    }
}