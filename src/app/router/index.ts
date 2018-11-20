import { Module, ModuleWithServices } from "@rxdi/core";
import { Route } from "./route.model";
import { ContextResolver } from "./context-resolver.service";
import { Router } from "./router.service";
import { RoutesService } from "./routes.service";

@Module()
export class RouterModule {
    public static forRoot(r: Route[]): ModuleWithServices {
        return {
            module: RouterModule,
            services: [
                {
                    provide: RoutesService,
                    deps: [RoutesService],
                    useFactory: (routesService: RoutesService) => routesService.set(r)
                },
                ...r.map(val => ({ provide: `rxdi-route-${val.path}`, useFactory: () => val.component })),
                ContextResolver,
                Router
            ]
        }
    }
}

export * from './context-resolver.service';
export { Route } from './route.model';
export * from './history/index';
export * from './routes.service';
export * from './decorators/index';

