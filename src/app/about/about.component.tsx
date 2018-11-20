
import { Component } from "@rxdi/core";
import { h, Component as PreactComponent } from 'preact';

@Component()
export class AboutComponent extends PreactComponent<any> {

    render() {
        return <div>
            <h1>About </h1>
            <h1>Yey</h1>
        </div>;
    }
}