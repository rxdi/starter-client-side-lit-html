
import { Component } from "@rxdi/core";
import { h, Component as PreactComponent } from 'preact';

@Component()
export class HomeComponent extends PreactComponent {
    render() {
        return <div>
            <h1>Lazy routed module </h1>
            <h1>Route: </h1>
        </div>;
    }
}