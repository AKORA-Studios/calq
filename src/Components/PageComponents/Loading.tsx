import { Progress } from "@chakra-ui/react";
import { Component } from "react";

interface Props {

}

interface States {

}

export class LoadingIndicator extends Component<Props, States> {
    render() {
        return <Progress w="100%" backgroundColor="transparent" size="sm" isIndeterminate />
    }
}