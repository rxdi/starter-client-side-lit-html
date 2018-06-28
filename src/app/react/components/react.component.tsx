
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component, OnInit, InjectSoft } from "@rxdi/core";
import shallowCompare from 'react-addons-shallow-compare';
import { ReactiveService } from "../components/react.service";
import { Subscription } from "rxjs";
import { HelloProps, HelloState } from "./react.component.model";

@Component()
export class ReactComponent extends React.Component<HelloProps, HelloState> implements OnInit {

    private reactiveService: ReactiveService = InjectSoft(ReactiveService);
    private subscription: Subscription;

    OnInit() {
        ReactDOM.render(
            <ReactComponent compiler="TypeScript" framework="React" rxdi="@rxdi" />,
            document.getElementById("App")
        );
    }

    render() {
        return <div>
            <h1>Hello from {this.props.compiler}, {this.props.framework} and {this.props.rxdi}!</h1>
            <h1>Reactive Service Counter: {this.state && this.state.value}</h1>
        </div>;
    }

    componentDidMount() {
        this.subscription = this.reactiveService.state.subscribe(state => this.setState(state));
    }

    componentWillUnmount() {
        this.reactiveService.clearInterval();
        this.subscription.unsubscribe();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

}