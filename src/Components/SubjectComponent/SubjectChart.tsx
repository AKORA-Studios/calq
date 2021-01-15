import { Component } from "react";
import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { avarage, max, Subject } from "../../";
import '../components.css';





class CustomTooltip extends Component<{ active?: boolean, payload?: [{ value: number }], label?: string }> {

    render() {
        if (!this.props.active) return null;

        return (
            <div className="custom-toolttip">
                <p className="label">
                    {`${this.props.label}: ${this.props.payload ? this.props.payload[0].value : '0'}`}
                </p>
                {/* 
                <p className="intro">{this.props.label}</p>
                <p className="desc">Anything you want can be displayed here.</p>
                */}
            </div>
        );
    };
}

interface Props extends Subject {

}

interface States {
    points: number[];
    avg: number;
    graphAvg: number;
    max: number;
}

function avg(points: number) {
    return (((points / 15 * 100) - 100) * (-1))
}

function graphAvg(average: number, max: number) {
    return avg(average) * (max / 15);
}



export class SubjectChart extends Component<Props, States> {
    state: States = {
        points: this.props.tests.map(v => v.points),
        avg: 0,
        max: 0,
        graphAvg: 0
    }

    componentDidMount() {
        console.log(this.props);
        console.log(this.state.avg / 15 * 100);

        this.setState({
            avg: avarage(this.state.points),
            max: max(this.state.points),
            graphAvg: graphAvg(avarage(this.state.points), max(this.state.points))
        })
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={this.props.tests}>
                    <defs>
                        <linearGradient id={`gradientFor${this.props.id}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={this.props.color} stopOpacity={1} />
                            <stop offset={this.state.graphAvg + "%"} stopColor={this.props.color} stopOpacity={0.6} />
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
                        y={this.state.avg}
                        stroke={this.props.color}
                        opacity={0.1}
                    />
                    <XAxis dataKey="name" tick={false} stroke="#ffffff" />
                    <YAxis dataKey="points" domain={[0, 15]} minTickGap={0} tickCount={15} stroke="#ffffff" />

                    <Tooltip content={<CustomTooltip />} />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}