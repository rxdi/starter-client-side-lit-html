import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';
import { UiComponentsComponent } from './ui-components.component';
import { DetailsComponent } from './details/details.component';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: UiComponentsComponent
      },
      {
        path: '/:itemId',
        component: DetailsComponent
      }
    ])
  ],
  components: [UiComponentsComponent, DetailsComponent],
})
export class UiComponentsModule {}
