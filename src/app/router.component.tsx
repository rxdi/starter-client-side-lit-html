
import { Component, InjectSoft } from "@rxdi/core";
import { h, Component as PreactComponent } from 'preact';
import { Router, RoutesService } from "./router";
import { Container } from '@rxdi/core';

export const getRouteParams = () => Container.get(Router).activatedRoute.getValue();
// export const getRouteComponent = () => Container.get(RoutesService).filterRoute(getRouteParams());

@Component()
export class RouterComponent extends PreactComponent<any> {

    private router: Router = InjectSoft(Router);

    constructor(
        props,

    ) {
        super();
        this.router.activatedRoute.subscribe(stream => {
            debugger
        });

        setTimeout(() => {
            this.router.navigate('lazy3', { replace: true, trigger: true });

        }, 1000);
        setTimeout(() => {

            this.router.navigate('lazy2', { replace: true, trigger: true });

        }, 3000);
        setTimeout(() => {
            this.router.navigate('lazy', { replace: true, trigger: true });
        }, 5000);
    }

    render(props) {
        const params = getRouteParams();

        // const route = getRouteComponent();
        return <div>
            <h1>Hello from Router!</h1>
            <h1>Route {params.route}</h1>
            <h1>Params {JSON.stringify(params.params)}</h1>
        </div>;
    }

}