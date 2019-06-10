import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';
import { UiComponentsComponent } from './ui-components.component';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: UiComponentsComponent
      }
    ])
  ],
  components: [UiComponentsComponent],
})
export class UiComponentsModule {}
