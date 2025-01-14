import { Component, createElement } from "react";

import { ReactBottomSheet } from "./components/ReactBottomSheet";

export class WebBottomSheet extends Component {
    render() {
        return (
            <ReactBottomSheet
                openBoolean={this.props.openBoolean}
                blocking={this.props.blocking}
                scrollLocking={this.props.scrollLocking}
                content={this.props.content}
            />
        );
    }
}
