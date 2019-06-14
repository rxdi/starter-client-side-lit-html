import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';
import { UiComponentsComponent } from './ui-components.component';
import { DetailsComponent } from './details/details.component';
import { TrelloComponent } from './trello/trello.component';
import { TocComponent } from './details/toc/toc.component';

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
  components: [UiComponentsComponent, DetailsComponent, TrelloComponent, TocComponent],
})
export class UiComponentsModule {}
