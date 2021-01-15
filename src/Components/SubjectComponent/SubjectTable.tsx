import { Component } from "react";
import { Subject } from "../../";
import '../components.css';

interface States {

}

export class SubjectTable extends Component<Subject, States> {
    render() {
        return <div>{(this.props.tests.map(d =>
            <div className="testDiv">
                <p className="testType">{d.type === 'Big' ? '📕' : '📔'}</p>
                <p className="testName testText" style={{ color: this.props.color }}>
                    {(d.name).length > 20 ? (d.name).substr(0, 17) + '...' : d.name}
                </p>

                <p className="testDate testText mono">
                    {d.date.toLocaleDateString('de-DE')}
                </p>

                <div className="testPoints" style={{ backgroundColor: this.props.color, height: '3vw' }}>
                    <p className="AssigmentPoints testText mono bold" >{d.points}</p>
                </div>


            </div>
        ))
        }</div>
    }
}