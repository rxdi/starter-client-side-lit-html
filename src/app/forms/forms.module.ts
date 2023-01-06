import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';

import { FormsComponent } from './forms.component';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: FormsComponent,
      },
    ]),
  ],
})
export class FormsModule {}
