import { Container, createTestBed } from '@rxdi/core';
import { DetailsComponent } from './details.component';


describe('DetailsComponent', () => {
  beforeAll(async () => {
    await createTestBed({
      components: [DetailsComponent]
    }).toPromise();
  });

  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be defined', done => {
    expect(Container.has(DetailsComponent)).toBeTruthy();
    done();
  });

  it('displays greeting', () => {
    const element = Container.get(DetailsComponent);
    element['render']();
    document.body.appendChild(element);
    const div = document.querySelector('details-component');
    expect(div.textContent).toBe('');
  });
});
