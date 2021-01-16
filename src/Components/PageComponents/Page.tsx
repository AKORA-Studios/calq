import { Component, CSSProperties } from "react";
import { Navbar, Footer } from "./";
import '../components.css';
import { LoadingIndicator } from "./loading";
interface Props {
    style?: CSSProperties;
    isLoading?: boolean;
}


export class Page extends Component<Props> {
    render() {
        return (
            <div>
                <Navbar />
                {this.props.isLoading ? <LoadingIndicator /> : (
                    <main style={this.props.style}>
                        {this.props.children}
                    </main>
                )}

                <Footer />
            </div >
        )
    }
}