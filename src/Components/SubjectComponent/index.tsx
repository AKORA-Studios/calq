import { Component } from 'react';
import { Subject } from '../../util';
import { SubjectChart } from './SubjectChart';
import { SubjectTable } from './SubjectTable';

export * from './SubjectChart';
export * from './SubjectTable';

export class SubjectView extends Component<Subject> {
    render() {
        return <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            height: '100%', width: '100%', marginBottom: '2%'
        }}>
            <SubjectChart name={this.props.name} color={this.props.color} entr={this.props.entr} id={this.props.id} />
            <SubjectTable name={this.props.name} color={this.props.color} entr={this.props.entr} id={this.props.id} />
        </div>
    }
}