import { Component } from "react";
import { Navbar, SubjectView } from '../../Components';
import '../../Components/components.css';
import { parse } from "../../database/";

var data = parse(require('./test.json'));

export class OverviewPage extends Component {
    render() {
        console.log(data);
        return (
            <div>
                <Navbar type={'overview'} />
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