import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/WebBottomSheet.css";

export class WebBottomSheet extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
