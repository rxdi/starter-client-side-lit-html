import { Module } from '@rxdi/core';
import { MarkdownReaderModule } from '@rxdi/ui-components/markdown-reader/client';
import { ResponsiveService } from '@rxdi/ui-components/services';

@Module({
  imports: [MarkdownReaderModule],
  providers: [ResponsiveService]
})
export class CoreModule {}
