
import { Component, Injector } from "@rxdi/core";
import { Subscription } from "rxjs";
import { h, render, Component as PreactComponent } from 'preact';
import { AppService } from "./core/services/app.service";
import { HelloProps, HelloState } from "./app.model";

@Component()
export class AppComponent extends PreactComponent<HelloProps, HelloState> {

    @Injector(AppService) private appService: AppService;

    private subscription: Subscription;

    OnBefore() {
        render(<AppComponent compiler="TypeScript" framework="React" rxdi="@rxdi" />, document.body);
    }

    render() {
        return <div>
            <h1>Hello from {this.props.compiler}, {this.props.framework} and {this.props.rxdi}!</h1>
            <h1>Reactive Service Counter: {this.state && this.state.value}</h1>
        </div>;
    }

    componentDidMount() {
        this.subscription = this.appService.state.subscribe(state => this.setState(state));
    }

    componentWillUnmount() {
        this.appService.clearInterval();
        this.subscription.unsubscribe();
    }

}