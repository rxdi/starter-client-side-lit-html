
import { Component } from "@rxdi/core";
import { h, Component as PreactComponent, render } from 'preact';
import { RouteParams } from "./router";

@Component()
export class TestComponent extends PreactComponent<any> {

    @RouteParams()
    test(params?: RouteParams) {
        return params;
    }
    render() {
        const props = this.test();
        debugger
        return <div>
            <h1>Lazy routed module </h1>
            <h1>Route: {this.props.routeParams.route}</h1>
        </div>;
    }
}