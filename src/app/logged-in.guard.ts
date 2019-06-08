import { Injectable } from '@rxdi/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuard {

    OnInit() {}

    canActivate(
        context,
        commands
    ): boolean | Promise<boolean> | Observable<boolean> {
        debugger;
        return commands.redirect('/');
        // return new Observable(o => o.next(true));
        // return new Promise((r) => r(true));
        // return new Observable(o => o.next(false));
        // return new Promise((r) => r(false));
        // throw new Error('error');
    }

}
