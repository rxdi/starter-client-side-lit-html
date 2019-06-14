import { Container, createTestBed } from '@rxdi/core';
import { ReleaseNotesComponent } from './release-notes.component';


describe('ReleaseNotesComponent', () => {
  beforeAll(async () => {
    await createTestBed({
      components: [ReleaseNotesComponent]
    }).toPromise();
  });

  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be defined', done => {
    expect(Container.has(ReleaseNotesComponent)).toBeTruthy();
    done();
  });

  it('displays greeting', () => {
    const element = Container.get(ReleaseNotesComponent);
    element['render']();
    document.body.appendChild(element);
    const div = document.querySelector('release-notes-component');
    expect(div.textContent).toBe('');
  });
});
