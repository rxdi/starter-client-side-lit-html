import { Injectable } from '@rxdi/core';

@Injectable()
export class State {
    dispatch(action: 'user-logged') {
        console.log('State', action);
    }
}
