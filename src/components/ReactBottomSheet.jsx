import React, { Component, createElement } from "react";

import { BottomSheet } from "react-spring-bottom-sheet-container-ref";
import "react-spring-bottom-sheet-container-ref/dist/style.css";

export class ReactBottomSheet extends Component {
    containerRef = React.createRef();
    state = {
        open: false,
        editedvalue: null
    };

    componentDidMount() {
        const mxPageContainer = document.querySelector(".mx-page");
        this.containerRef.current = mxPageContainer;
    }

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
                <BottomSheet
                    className="webbottomsheet"
                    open={this.state.open}
                    onDismiss={this.onDismiss}
                    blocking={this.props.blocking}
                    scrollLocking={this.props.scrollLocking}
                    initialFocusRef={false}
                    containerRef={this.containerRef}
                >
                    {this.props.content}
                </BottomSheet>
            </div>
        );
    }
}
