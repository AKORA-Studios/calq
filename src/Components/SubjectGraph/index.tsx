import { Component, } from "react";
import '../headline.css'
import { AreaChartGradient } from '../index'

import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, AreaChart, Area, ReferenceLine } from 'recharts'
const TestDate = require('./test.json') as {
    name: string;
    entr: {
        name: string;
        date: string;
        points: number;
        type: string;
    }[];
    color: string;
}[];


export class AreaChartSubjects extends Component {
    render() {
        return (
            <div style={{ marginLeft: "5%", marginRight: "5%" }}>
                <br></br>

                { (TestDate.map(e => {
                    return <div className="subjectDiv" style={{ display: 'grid', gridTemplateColumns: "50% 50%" }}>
                        <div>
                            <h1 className="subjectName" style={{ textAlign: "left", marginLeft: "5%", color: e.color }}>{e.name}</h1>
                            <AreaChart width={700} height={300} data={e.entr}>

                                <AreaChartGradient id="colorUv" color={e.color}></AreaChartGradient>

                                <CartesianGrid
                                    stroke="#ffffff"
                                    opacity={0.05}
                                    vertical={false}
                                />

                                <Area type="monotone" dataKey="points"
                                    stroke={e.color}
                                    fillOpacity={1}
                                    fill="url(#colorUv)"
                                    animationEasing="ease-in-out"
                                    name="Points"
                                    dot={{ stroke: "#ffffff", opacity: 0.2 }}
                                />

                                <ReferenceLine
                                    y={e.entr.map(v => v.points).reduce((a, b) => a + b) / e.entr.length}
                                    stroke={'#ffffff'}
                                    opacity={1}
                                />
                                <XAxis dataKey="points" tick={false} stroke="#ffffff" />
                                <YAxis domain={[0, 15]} minTickGap={0} tickCount={15} stroke="#ffffff" />

                                <Tooltip />
                            </AreaChart>
                        </div>


                        <div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            {(e.entr.map(d => {
                                return <div className="subjectTestInfo" style={{ display: 'grid', gridTemplateColumns: "10% 50% 30% 10%" }}>
                                    <div className="AssigmnetType"> <p className="AssignmentTypeIcon">{d.type == 'Big' ? '📕' : '📔'}</p> </div>
                                    <h1 className="subjectDescription" style={{ color: e.color }}>{(d.name).length > 20 ? (d.name).substr(0, 17) + '...' : d.name}</h1>

                                    <div style={{
                                        height: '3.5rem'
                                    }}>
                                        <h1 className="subjectDescription" style={{ color: "white" }}>{d.date}</h1>
                                    </div>

                                    <div className="assignmentPointsDiv" style={{ backgroundColor: e.color, height: '3.5rem' }}>
                                        <p className="AssigmentPoints" >{d.points}</p>
                                    </div>


                                </div>
                            }))}
                        </div>
                    </div>
                }))}
                <br></br>


            </div>
        )
    }
}