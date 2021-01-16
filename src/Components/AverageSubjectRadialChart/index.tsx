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
            <Center size="50px" className="mainPageContainer">
                <ResponsiveContainer width={500} height={500}>

                    <RadialBarChart innerRadius={60} outerRadius={140} barSize={10} data={[data]} >
                        <RadialBar fill={data.color} maxBarSize={15} background label={{ position: 'insideStart', fill: data.color }} dataKey="points" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </Center>

        );
    }
}