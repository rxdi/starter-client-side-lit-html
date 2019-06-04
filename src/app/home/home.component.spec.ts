import 'jest';
import { Container, createTestBed } from '@rxdi/core';
import { HomeComponent } from './home.component';

describe('State Injectable', () => {
  beforeAll(async () => {
    await createTestBed({
      components: [HomeComponent],
    }).toPromise();
  });
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it('should be defined', done => {
    expect(Container.has(HomeComponent)).toBeTruthy();
    done();
  });
  it('displays greeting', () => {
    // Create element
    const element = new HomeComponent();

    document.body.appendChild(element);
    // Verify displayed greeting
    const div = element.shadowRoot.querySelector('div');
    expect(div.textContent).toBe('Hello, World!');
  });
});
