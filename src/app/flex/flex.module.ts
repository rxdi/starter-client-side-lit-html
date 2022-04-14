import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';

import { FlexComponent } from './flex.component';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: FlexComponent,
      },
    ]),
  ],
})
export class FlexModule {}
