import { Component, } from "react";

interface Props {
    color: string
    id: string
}

export class AreaChartGradient extends Component<Props> {
    render() {
        return (
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={this.props.color} stopOpacity={1} />
                    <stop offset="95%" stopColor={this.props.color} stopOpacity={0.05} />
                </linearGradient>
            </defs>)
    }


} 