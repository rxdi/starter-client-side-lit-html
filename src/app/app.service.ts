import { Service } from "@rxdi/core";
import { BehaviorSubject } from "rxjs";
import { HelloState } from "./app.model";
import { Router } from "@rxdi/router";

@Service()
export class AppService {
    count: number = 0;
    state: BehaviorSubject<HelloState> = new BehaviorSubject({ value: 0 });
    constructor(
        private router: Router
    ) {
       const interval = setInterval(() => {
            this.count++
            if (this.count >= 6) {
                this.router.navigate('/home');
                this.router.navigate('/home');
                clearInterval(interval);
            }
            this.state.next({ value: this.count });
        }, 1000);
    }
}