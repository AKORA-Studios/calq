import { Component } from "react";
import { Navbar, SubjectView } from '../../Components';
import '../../Components/components.css';
import { getSubjects, Subject } from "../../database";

//var data = parse(require('./test.json'));

export class OverviewPage extends Component<{}, { data: Subject[] }> {
    state: { data: Subject[] } = { data: [] }

    componentDidMount() {
        getSubjects().then((json) => {
            this.setState({
                data: json
            })
        })
    }

    render() {
        return (
            <div>
                <Navbar type={'overview'} />
                <div className="conatiner">
                    {(this.state.data.map(sub =>
                        <SubjectView key={sub.id}
                            name={sub.name} color={sub.color} tests={sub.tests} id={sub.id} />
                    ))}

                </div>
            </div>

        )
    }
}