import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';

import { AboutComponent } from './about.component';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: AboutComponent
      }
    ])
  ]
})
export class AboutModule {}
