import { Module } from '@rxdi/core';

import { SpaceXService } from './spacex/spacex.service';

@Module({
  providers: [SpaceXService]
})
export class CoreModule { }