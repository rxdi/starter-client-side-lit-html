import { Service } from "@rxdi/core";
import { Route } from "./route.model";

@Service()
export class RoutesService {
    private _paths: Route[] = [];

    set(paths: Route[]) {
        this._paths = paths;
    }

    get() {
        return this._paths;
    }
}