import { Module } from '@rxdi/core';
import { AboutComponent } from './about.component';

@Module({
    bootstrap: [AboutComponent]
})
export class AboutModule {}

export const Routes = [];
