
import { Component } from "@rxdi/core";
import { h, render, Component as PreactComponent } from 'preact';
import { HelloProps, HelloState } from "./app.model";
import { RouterComponent } from "./router.component";

@Component()
export class AppComponent extends PreactComponent<HelloProps, HelloState> {

    OnBefore() {
        render(<AppComponent />, document.getElementById('app'));
    }

    render() {
        return <RouterComponent></RouterComponent>
    }

    componentDidMount() {}

    componentWillUnmount() {}

}