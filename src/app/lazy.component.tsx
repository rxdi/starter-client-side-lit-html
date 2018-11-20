
import { Component } from "@rxdi/core";
import { h, Component as PreactComponent, render } from 'preact';
import { RouteParams } from "@rxdi/router";

@Component()
export class TestComponent extends PreactComponent<any> {

    @RouteParams()
    OnBefore(params: RouteParams) {
        render(<TestComponent routeParams={params} />, document.getElementById('app'));
    }
    render() {
        return <div>
            <h1>Lazy routed module </h1>
            <h1>Route: {this.props.routeParams.route}</h1>
        </div>;
    }
}