import 'jest';
import { Container, createTestBed } from '@gapi/core';
import { TestService } from './test.service';

describe('Test Service', () => {
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      providers: [TestService]
    }).toPromise();
  });

  it('should be defined', done => {
    expect(Container.has(TestService)).toBeTruthy();
    done();
  });
});
