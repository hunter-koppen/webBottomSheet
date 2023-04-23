import { Component, createElement } from "react";

import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

export class ReactBottomSheet extends Component {
    state = {
        open: false,
        editedvalue: null
    };

    componentDidUpdate(prevProps) {
        // Check if widget has loaded the url data
        console.log(this.props.openBoolean);
        if (this.props.openBoolean && this.props.openBoolean.status === "available") {
            if (prevProps.openBoolean !== this.props.openBoolean && this.props.openBoolean !== this.state.editedvalue) {
                this.setState({ open: this.props.openBoolean.value });
            }
        }
    }

    onDismiss = () => {
        this.setState({ open: false, editedvalue: false });
        this.props.openBoolean.setValue(false);
    };

    render() {
        return (
            <div>
                <BottomSheet open={this.state.open} onDismiss={this.onDismiss} data-body-scroll-lock-ignore={true}>
                    {this.props.content}
                </BottomSheet>
            </div>
        );
    }
}
