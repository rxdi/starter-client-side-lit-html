import { Container, createTestBed } from '@rxdi/core';
import { UiComponentsComponent } from './ui-components.component';


describe('UiComponentsComponent', () => {
  beforeAll(async () => {
    await createTestBed({
      components: [UiComponentsComponent]
    }).toPromise();
  });

  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be defined', done => {
    expect(Container.has(UiComponentsComponent)).toBeTruthy();
    done();
  });

  it('displays greeting', () => {
    const element = Container.get(UiComponentsComponent);
    element['render']();
    document.body.appendChild(element);
    const div = document.querySelector('ui-components-component');
    expect(div.textContent).toBe('');
  });
});
