
import * as React from "react";

import * as ReactDOM from "react-dom";
import { Component } from "@rxdi/core";

export interface HelloProps {
    compiler: string;
    framework: string;
    rxdi: string;
}

@Component()
export class ReactComponent extends React.Component<HelloProps, {}> {

    OnInit() {
        ReactDOM.render(
            <ReactComponent compiler="TypeScript" framework="React" rxdi="@rxdi" />,
            document.getElementById("example")
        );
    }

    render() {
        return <h1>Hello from {this.props.compiler}, {this.props.framework} and {this.props.rxdi}!</h1>;
    }

}