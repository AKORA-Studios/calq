import { Component } from "react";
import { Subject } from "../../database/";
import '../components.css';

interface States {

}

export class SubjectTable extends Component<Subject, States> {
    render() {
        return <div>{(this.props.entr.map(d =>
            <div className="testDiv">
                <p className="AssignmentTypeIcon">{d.type === 'Big' ? '📕' : '📔'}</p>
                <p className="subjectDescription testText mono" style={{ color: this.props.color }}>
                    {(d.name).length > 20 ? (d.name).substr(0, 17) + '...' : d.name}
                </p>

                <p className="subjectDescription testText mono" style={{ color: "white" }}>
                    {d.date.toLocaleDateString('de-DE')}
                </p>

                <div className="assignmentPointsDiv" style={{ backgroundColor: this.props.color, height: '3vw' }}>
                    <p className="AssigmentPoints testText mono bold" >{d.points}</p>
                </div>


            </div>
        ))}</div>
    }
}