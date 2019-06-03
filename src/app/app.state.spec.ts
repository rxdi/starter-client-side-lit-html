import 'jest';
import { Container, createTestBed } from '@rxdi/core';
import { State } from './app.state';

describe('State Injectable', () => {
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      providers: [State]
    }).toPromise();
  });

  it('should be defined', done => {
    expect(Container.has(State)).toBeTruthy();
    done();
  });
});
