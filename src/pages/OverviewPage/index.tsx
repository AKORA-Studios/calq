import { Component } from "react";
import { Page, SubjectView } from '../../Components';
import '../../Components/components.css';
import { getSubjects, Subject } from "../../database";

//var data = parse(require('./test.json'));

interface States {
    loading: boolean,
    data: Subject[]
}
export class OverviewPage extends Component<{}, States> {
    state: States = { data: [], loading: true }

    componentDidMount() {
        console.log(this.state)
        getSubjects().then((json) => {
            this.setState({
                loading: false,
                data: json
            })
        })
    }

    render() {
        return (
            <Page isLoading={this.state.loading} name="overview">
                {(this.state.data.map(sub =>
                    <SubjectView key={sub.name}
                        name={sub.name} color={sub.color} tests={sub.tests} />
                ))}

            </Page>
        )
    }
}