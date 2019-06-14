import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';
import { MarkdownReaderComponent } from '@rxdi/ui-components/markdown-reader/client';
import { UiComponentsComponent } from './ui-components.component';
import { TrelloComponent } from './trello/trello.component';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: UiComponentsComponent
      },
      {
        path: '/:namespace/:repo',
        component: MarkdownReaderComponent
      }
    ])
  ],
  components: [MarkdownReaderComponent, UiComponentsComponent, TrelloComponent],
})
export class UiComponentsModule {}
