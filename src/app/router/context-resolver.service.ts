import { Service, Container } from "@rxdi/core";
import { RoutesService } from "./routes.service";
import { Router } from "./history";

@Service()
export class ContextResolver {

    constructor(
        private routes: RoutesService,
        private router: Router
        
    ) {
        this.router.onChange()
        .subscribe(async () => {
            const snapshot = this.router.getSnapshot();
            this.router.activatedRoute.next(snapshot);
            await this.resolve(snapshot.route);
        });
    }

    async resolve(path: string) {
        const currentRoute = this.routes.get().filter(r => r.path === path.replace('/', ''));
        if (!currentRoute.length) {
            this.router.navigate('/').subscribe();
            return await Promise.reject('missing-route');
        }
        const m = await currentRoute[0].component;
        if (m.__esModule) {
            return await Container.get(Object.keys(m).map(res => m[res])[0]);
        }
        return await Container.get(m);
    }

}