import { subscribe, html, customElement } from '@rxdi/lit-html';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@customElement('about-component', {
  template(this: AboutComponent) {
    return html`
    <header>
      <h1>About</h1>
    </header>
     ${subscribe(this.timer)}
    <p>
    <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli">
    </p>
    `;
  }
})
export class AboutComponent extends HTMLElement {
  private timer = timer(1, 1000).pipe(map(v => v));

  OnInit() {
    console.log('About component init');
  }

  OnDestroy() {
    console.log('About component destroyed');
  }

}
