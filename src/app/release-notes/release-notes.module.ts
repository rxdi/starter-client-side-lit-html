import { Module } from '@rxdi/core';
import { ReleaseNotesComponent } from './release-notes.component';
import { RouterModule } from '@rxdi/router';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: ReleaseNotesComponent
      }
    ])
  ],
  components: [ReleaseNotesComponent]
})
export class ReleaseNotesModule {}
