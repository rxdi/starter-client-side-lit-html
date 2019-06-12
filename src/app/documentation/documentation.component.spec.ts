import { Container, createTestBed } from '@rxdi/core';
import { DocumentationComponent } from './documentation.component';


describe('DocumentationComponent', () => {
  beforeAll(async () => {
    await createTestBed({
      components: [DocumentationComponent]
    }).toPromise();
  });

  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be defined', done => {
    expect(Container.has(DocumentationComponent)).toBeTruthy();
    done();
  });

  it('displays greeting', () => {
    const element = Container.get(DocumentationComponent);
    element['render']();
    document.body.appendChild(element);
    const div = document.querySelector('documentation-component');
    expect(div.textContent).toBe('');
  });
});
