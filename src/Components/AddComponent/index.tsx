import { Button, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { Component } from "react";

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

export class AddComponent extends Component<Props, States> {
    state = {
        points: 9
    }
    render() {
        return (
            <div className="addComponentMainDiv" >
                <div className="addComponentGridDiv">
                    <Select size="sm" variant="filled" backgroundColor='#242424' color='#59afff' style={{ borderRadius: '5px' }} >
                        {(dataArray.map(e => (
                            <option value={e.name} className="addComponentOption">{e.name}</option>
                        )))}
                    </Select>
                    <div />
                    <div style={{ display: 'grid', gridTemplateColumns: '85%  5% 10%' }}>
                        <Slider aria-label="sliderPoints" defaultValue={9} max={15} onChange={(e) => this.setState({ points: e })} >
                            <SliderTrack backgroundColor='#242424'  >
                                <SliderFilledTrack />
                            </SliderTrack  >
                            <SliderThumb backgroundColor='#59afff' />

                        </Slider>
                        <div />
                        <div style={{ backgroundColor: '#59afff', borderRadius: '5px' }}>
                            <p style={{
                                marginBottom: '10%',
                                fontSize: '25px',
                                textAlign: 'center'
                            }}>{this.state.points}</p></div>
                    </div>
                    <div />
                    <Select size="sm" variant="filled" backgroundColor='#242424' color='#59afff' style={{ borderRadius: '5px' }} >
                        <option value={'Bug'} className="addComponentOption" >Bug</option>
                        <option value={'Smal'} className="addComponentOption" >Smal</option>
                    </Select>
                    <div />
                    <div>Dat5e</div>

                    <div />
                    <Button style={{
                        backgroundColor: '#59afff', color: '#ffffff'
                    }} >Add</Button>

                </div>
            </div>


        )
    }
}