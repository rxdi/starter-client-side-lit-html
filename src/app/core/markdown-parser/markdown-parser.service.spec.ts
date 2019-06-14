import 'jest';
import { Container, createTestBed } from '@gapi/core';
import { MarkdownParserService } from './markdown-parser.service';

describe('MarkdownParser Service', () => {
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      providers: [MarkdownParserService]
    }).toPromise();
  });

  it('should be defined', done => {
    expect(Container.has(MarkdownParserService)).toBeTruthy();
    done();
  });
});
