import { Module } from '@rxdi/core';
import { DocumentationComponent } from './documentation.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@rxdi/router';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: DocumentationComponent
      }
    ])
  ],
  components: [DocumentationComponent, DetailsComponent]
})
export class DocumentationModule {}
