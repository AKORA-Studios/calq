import { Component } from "react";
import { Navbar, SubjectView } from '../../Components'
import { Subject } from "../../util";
import '../../Components/components.css'

var data = require('./test.json') as Subject[];

export class OverviewPage extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="headline">
                    {(data.map(sub =>
                        <SubjectView
                            name={sub.name} color={sub.color} entr={sub.entr} id={sub.id} />
                    ))}

                </div>
            </div>

        )
    }
}