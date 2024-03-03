import { BaseGraphqlLayer } from '@core/base';
import { Injectable } from '@rxdi/core';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SpaceXService extends BaseGraphqlLayer {
  getLaunches() {
    return this.query({ query: 'launches-past.query.graphql', errorPolicy: 'ignore' }).pipe(
      map((res) => res.data.launchesPast)
    );
  }
}
