import { Service } from "@rxdi/core";
import { BehaviorSubject } from "rxjs";
import { HelloState } from "./app.model";
import { Router } from "./router";

@Service()
export class AppService {
    count: number = 0;
    state: BehaviorSubject<HelloState> = new BehaviorSubject({ value: 0 });
    constructor(
        private router: Router
    ) {
       setTimeout(() => {
            this.router.navigate('/home');
            this.router.navigate('/home');
        }, 1000);
    }
}