import { html, customElement, async, LitElement } from '@rxdi/lit-html';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  OnBeforeEnter,
  OnAfterEnter,
  OnAfterLeave,
  OnBeforeLeave,
  Router
} from '@rxdi/router';
import { OnBefore, OnDestroy } from '@rxdi/lit-html';
interface Hooks extends
OnDestroy,
OnBeforeEnter,
OnAfterEnter,
OnAfterLeave,
OnBeforeLeave {}
@customElement('about-component', {
  template(this: AboutComponent) {
    return html`
      <header>
        <h1>About</h1>
      </header>
      ${async(this.timer)}
      <p>
        <img
          src="https://www.w3schools.com/html/pic_trulli.jpg"
          alt="Italian Trulli"
        />
      </p>
    `;
  }
})
export class AboutComponent extends LitElement implements Hooks {
  private timer = timer(1, 1000).pipe(map(v => v));
  @Router() private router: Router;

  onBeforeEnter() {
    this.router;
    debugger;
  }
  onAfterEnter() {
    this.router;
    debugger;
  }
  onBeforeLeave() {
    this.router;
    debugger;
  }
  onAfterLeave() {
    this.router;
    debugger;
  }

  OnInit() {
    this.router;
    console.log('About component init');
  }

  OnDestroy() {
    this.router;
    console.log('About component destroyed');
  }
}
