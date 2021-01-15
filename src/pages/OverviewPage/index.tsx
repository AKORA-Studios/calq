import { Component } from "react";
import { Navbar, SubjectView } from '../../Components';
import '../../Components/components.css';
import { getSubjects, Subject } from "../../database";

//var data = parse(require('./test.json'));

export class OverviewPage extends Component<{}, { data: Subject[] }> {
    constructor(props: {}) {
        super(props);
        this.state = { data: [] }

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
                <div className="headline">
                    {(this.state.data.map(sub =>
                        <SubjectView
                            name={sub.name} color={sub.color} tests={sub.tests} id={sub.id} />
                    ))}

                </div>
            </div>

        )
    }
}