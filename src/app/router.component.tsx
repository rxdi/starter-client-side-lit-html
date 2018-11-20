
import { Component } from "@rxdi/core";
import { h, Component as PreactComponent } from 'preact';
import { Router, RoutesService } from "@rxdi/router";
import { Container } from '@rxdi/core';

export const getRouteParams = () => Container.get(Router).activatedRoute.getValue();
// export const getRouteComponent = () => Container.get(RoutesService).filterRoute(getRouteParams());

@Component()
export class RouterComponent extends PreactComponent<any> {

    render(props) {
        const params = getRouteParams();
        // const route = getRouteComponent();
        debugger
        return <div>
            <h1>Hello from Router!</h1>
            <h1>Route {params.route}</h1>
            <h1>Params {JSON.stringify(params.params)}</h1>
        </div>;
    }

}