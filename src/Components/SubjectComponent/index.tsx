import { Component } from 'react';
import { Subject } from '../../database/util';
import { SubjectChart } from './SubjectChart';
import { SubjectTable } from './SubjectTable';

export * from './SubjectChart';
export * from './SubjectTable';

export class SubjectView extends Component<Subject> {
    render() {
        return <div className="subjectView">
            <SubjectChart name={this.props.name} color={this.props.color} tests={this.props.tests} id={this.props.id} />
            <div />
            <SubjectTable name={this.props.name} color={this.props.color} tests={this.props.tests} id={this.props.id} />
        </div>
    }
}