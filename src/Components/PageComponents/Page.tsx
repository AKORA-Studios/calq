import { Component, CSSProperties } from "react";
import { Navbar, Footer, LoadingIndicator } from ".";
import '../components.css';


interface Props {
    style?: CSSProperties;
    isLoading?: boolean;
}


export class Page extends Component<Props> {
    render() {
        return (
            <div>
                <Navbar />
                {this.props.isLoading ? <div className="progressAnimation"><LoadingIndicator /></div> : (
                    <main style={this.props.style}>
                        {this.props.children}
                    </main>
                )}

                <Footer />
            </div >
        )
    }
}