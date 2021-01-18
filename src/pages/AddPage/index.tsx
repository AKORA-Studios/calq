import { Component } from "react"
import { Page, AddComponent } from '../../Components';

const dataArray =
    [
        { name: 'MA' },
        { name: 'DE' },
        { name: 'SPA' },
        { name: 'BIO' },
        { name: 'CHE' },
        { name: 'ETH' },
        { name: 'INF' },
        { name: 'GEO' },
        { name: 'FR' }
    ]

interface Props {

}
interface States {
    points: number
}

export class AddPage extends Component<Props, States> {
    state = {
        points: 9
    }
    render() {
        return (
            <Page name="add" >
                <div style={{
                    marginLeft: '5%', marginRight: '5%',
                    width: '70%',
                }}>
                    <AddComponent />


                </div>

            </Page >
        )
    }
}