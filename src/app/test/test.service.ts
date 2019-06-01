import { Injectable } from '@rxdi/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TestService {
    gosho2: BehaviorSubject<string> = new BehaviorSubject('none');
    constructor() {
        setTimeout(() => {
            this.gosho2.next('E NQMA BACE');
        }, 5000);
    }

    gosho(event) {
        console.log('Gosho clicked');
    }
}
