import { Center } from "@chakra-ui/react";
import { Component } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import '../components.css'


interface Props {
    name: string, points: number, color: string
}

interface State {
    size: number
}
export class SubjectRadialBarChart extends Component<Props, State> {
    state: { size: number } = { size: 150 };
    render() {
        return (
            <Center size="100px" >
                <ResponsiveContainer width={this.state.size} height={this.state.size}>
                    <RadialBarChart innerRadius={this.state.size / 2 * 0.8} outerRadius={this.state.size / 2 * 0.7} maxBarSize={15} data={[this.props]} >
                        <RadialBar fill={this.props.color} maxBarSize={15} dataKey="points" />
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 15]}
                            tick={false}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <text style={{ color: this.props.color, fontSize: '2vw', position: 'absolute', paddingTop: '12%' }}>{this.props.name} </text>
                <text style={{ color: this.props.color, fontSize: '2vw', position: 'absolute' }}>{this.props.points} </text>
            </Center>
        );
    }
}