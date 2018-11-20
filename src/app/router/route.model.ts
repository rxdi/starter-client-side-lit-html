export class Route {
    path?: string;
    pathMatch?: string;
    component?: any;
    redirectTo?: string;
    canActivate?: any[];
    canActivateChild?: any[];
    canDeactivate?: any[];
}

