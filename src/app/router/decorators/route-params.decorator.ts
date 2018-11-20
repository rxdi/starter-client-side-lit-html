import { Container } from "@rxdi/core";
import { Router } from "../history";

export function RouteParams() {
    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function(a) {
            return originalMethod(Container.get(Router).activatedRoute.getValue());
        };
        return descriptor;
    }
};

export interface RouteParams {
    route: string;
    params: any;
}