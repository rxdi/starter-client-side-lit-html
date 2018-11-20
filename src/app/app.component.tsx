
import { Component, Injector, Container } from "@rxdi/core";
import { Subscription } from "rxjs";
import { h, render, Component as PreactComponent } from 'preact';
import { AppService } from "./app.service";
import { HelloProps, HelloState } from "./app.model";
import { RouteParams, Debounce } from "@rxdi/router";
import { RouterComponent } from "./router.component";

@Component()
export class AppComponent extends PreactComponent<HelloProps, HelloState> {

    @Injector(AppService) private appService: AppService;

    private subscription: Subscription;

    @RouteParams()
    OnBefore(params: RouteParams) {
        render(<AppComponent compiler="TypeScript" framework="PReact" rxdi="@rxdi" routeParams={params} />, document.getElementById('app'));
    }

    render(props: HelloProps, ) {
        debugger
        return <div>
            <RouterComponent>dadada</RouterComponent>
            <h1>Hello from {this.props.compiler}, {this.props.framework} and {this.props.rxdi}!</h1>
            <h1>Reactive Service Counter: {this.state && this.state.value}</h1>
            <h1>Route {this.props.routeParams.route }</h1>
        </div>;
    }

    componentDidMount() {
        this.subscription = this.appService.state.subscribe(state => this.setState(state));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

}