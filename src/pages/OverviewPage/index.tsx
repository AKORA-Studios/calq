import { Component } from "react";
import { LoadingIndicator, Navbar, Page, SubjectView } from '../../Components';
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
                data: json
            })
        })
    }

    render() {
        if (this.state.loading) return <Page isLoading />
        return (
            <Page>
                {(this.state.data.map(sub =>
                    <SubjectView key={sub.id}
                        name={sub.name} color={sub.color} tests={sub.tests} id={sub.id} />
                ))}

            </Page>
        )
    }
}