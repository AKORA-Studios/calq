import { Component } from "react";
import '../components.css'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, AreaChart, Area, PolarGrid, CartesianAxis, ReferenceLine, ResponsiveContainer } from 'recharts'
import { avarage, range, Subject } from "../../util";

interface States {

}

export class SubjectChart extends Component<Subject, States> {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={this.props.entr}>

                    <defs>
                        <linearGradient id={`gradientFor${this.props.id}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={this.props.color} stopOpacity={1} />
                            <stop offset="95%" stopColor={this.props.color} stopOpacity={0.05} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid
                        stroke="#ffffff"
                        opacity={0.05}
                        vertical={false}
                    />


                    <Area type="monotone" dataKey="points"
                        stroke={this.props.color}
                        fillOpacity={1}
                        fill={`url(#gradientFor${this.props.id})`}
                        animationEasing="ease-in-out"
                        name="Points"
                        dot={{ stroke: "#ffffff", opacity: 0.2 }}
                    />

                    <ReferenceLine
                        y={avarage(this.props.entr.map(v => v.points))}
                        stroke={this.props.color}
                        opacity={1}
                    />
                    <XAxis dataKey="points" tick={false} stroke="#ffffff" />
                    <YAxis domain={[0, 15]} minTickGap={0} tickCount={15} stroke="#ffffff" />

                    <Tooltip label="qwq" />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}