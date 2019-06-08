import { Injectable, OnInit } from '@rxdi/core';
import { Observable } from 'rxjs';
import {
  CanActivateContext,
  CanActivateCommands,
  CanActivateResolver,
  CanActivateRedirectResult
} from '@rxdi/router';

@Injectable()
export class  LoggedInGuard implements CanActivateResolver, OnInit {

  OnInit() {}

  canActivate(
    context: CanActivateContext,
    commands: CanActivateCommands
  ): CanActivateRedirectResult {
    return commands.redirect('/about');
    // return false | true;
    // return new Promise((r) => r(true | false));
    // return new Observable((o) => {
    //     o.next(false | true);
    //     o.complete();
    // });
    // throw new Error('error');
    // If everything is cool we can leave VOID

  }
}
