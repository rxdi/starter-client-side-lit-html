import { RouteParams } from "@rxdi/router";

export class HelloProps {
    compiler: string;
    framework: string;
    rxdi: string;
    routeParams: RouteParams;
}

export class HelloState {
    value: number;
    time?: any;
}
