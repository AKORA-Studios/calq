import { Button, Center, useToast } from "@chakra-ui/react";
import { Component, CSSProperties, FC } from "react";
import { Navbar, Footer, LoadingIndicator } from ".";
import '../components.css';


interface Props {
    style?: CSSProperties;
    name?: string;
    isLoading?: boolean;
    error?: boolean;
}


export const Page: FC<Props> = (props) => {
    const toast = useToast({
        position: 'top',
        duration: 5000,
        isClosable: true
    })

    console.log(props);

    return (
        <div>
            <Navbar name={props.name} />
            {(() => {
                if (props.isLoading) return <div className="progressAnimation"><LoadingIndicator /></div>;
                if (props.error) return <main><Center width="100%">
                    <Button as='a' href='/login'>Du musst angemeldet sein</Button>
                </Center></main>;

                return <main style={props.style}>
                    {props.children}
                </main>
            })()}
            <Footer />
        </div >
    )

}