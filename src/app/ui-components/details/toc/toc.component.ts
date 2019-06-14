import { LitElement, Component, html, property } from '@rxdi/lit-html';
import { style } from './toc.component.css';
import { Inject } from '@rxdi/core';
import { ResponsiveService } from '../../../core/responsive/responsive.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TocInterface } from './toc.interface';

/**
 * @customElement toc-component
 */
@Component({
  selector: 'toc-component',
  style,
  template(this: TocComponent) {
    return html`
      <div class="toc-wrapper">
        <ul>
          ${this.menus.map(
            item =>
              html`
                <li @click=${() => this.clickAnchor(item.elementRef)}>${item.title}</li>
              `
          )}
        </ul>
      </div>
    `;
  }
})
export class TocComponent extends LitElement {
  @Inject(ResponsiveService) private rs: ResponsiveService;
  @property() items: BehaviorSubject<
    TocInterface[]
  > = new BehaviorSubject([]);
  @property() menus: TocInterface[] = [];
  menuSubscription: Subscription;
  OnInit() {
    this.menuSubscription = this.items.subscribe(
      stream => (this.menus = stream)
    );
  }

  clickAnchor(element: HTMLElement) {
      debugger;
    this.rs.navigateToAnchor(element);
  }
}
