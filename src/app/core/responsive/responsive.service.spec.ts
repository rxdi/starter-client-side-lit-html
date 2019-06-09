import 'jest';
import { Container, createTestBed } from '@rxdi/core';
import { ResponsiveService } from './responsive.service';

describe('Responsive Service', () => {
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      providers: [ResponsiveService]
    }).toPromise();
  });

  it('should be defined', done => {
    expect(Container.has(ResponsiveService)).toBeTruthy();
    done();
  });
});
