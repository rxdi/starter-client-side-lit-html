import { Module } from '@rxdi/core';
import { ResponsiveService } from './responsive/responsive.service';

@Module({
  providers: [ResponsiveService]
})
export class CoreModule {}
