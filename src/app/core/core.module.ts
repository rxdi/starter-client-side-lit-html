import { Module } from '@rxdi/core';
import { ResponsiveService } from './responsive/responsive.service';
import { MarkdownParserService } from './markdown-parser/markdown-parser.service';

@Module({
  providers: [ResponsiveService, MarkdownParserService]
})
export class CoreModule {}
