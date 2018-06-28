import { Service } from "@rxdi/core";
import { BehaviorSubject } from "rxjs";
import { HelloState } from "./react.component.model";

@Service()
export class ReactiveService {
    count: number = 0;
    state: BehaviorSubject<HelloState> = new BehaviorSubject({ value: 0 });
    interval: any;

    constructor() {
        this.interval = setInterval(() => {

            this.count++
            // Stop changing state when count reaches 6
            if (this.count <= 6) {
                this.state.next({ value: this.count });
            }

            console.log(this);
            // Until count is 15 no DOM manipulations will be triggered
            // Start changing state when count reaches 15
            if (this.count > 10) {
                this.state.next({ value: this.count });
            }
        }, 1000);
    }

    clearInterval() {
        clearInterval(this.interval);
    }

}