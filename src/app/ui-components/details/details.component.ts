import {
  html,
  Component,
  OnInit,
  OnDestroy,
  OnUpdate,
  unsafeHTML,
  property,
  LitElement
} from '@rxdi/lit-html';
import { style } from './details.component.css';
import { Inject } from '@rxdi/core';
import { MarkdownParserService } from '../../core/markdown-parser/markdown-parser.service';
import { ResponsiveService } from '../../core/responsive/responsive.service';
import { BehaviorSubject } from 'rxjs';

/**
 * @customElement ui-components-details-component
 */
@Component({
  selector: 'ui-components-details-component',
  style,
  template(this: DetailsComponent) {
    return html`
      ${this.items ? html`<toc-component .items=${this.items}></toc-component>` : ''}
      ${this.html
        ? ''
        : html`
            <loading-screen-component></loading-screen-component>
          `}
      ${this.html
        ? html`
            <div class="container">
              ${unsafeHTML(this.html)}
            </div>
          `
        : ''}
    `;
  }
})
export class DetailsComponent extends LitElement
  implements OnInit, OnDestroy, OnUpdate {
  @property() html = '';
  @Inject(MarkdownParserService) private mdParser: MarkdownParserService;
  @Inject(ResponsiveService) private rs: ResponsiveService;
  items: BehaviorSubject<any> = new BehaviorSubject([]);
  OnInit() {
    this.fetch();
    console.log('DetailsComponent component init');
  }

  OnDestroy() {
    console.log('DetailsComponent component destroyed');
  }

  OnUpdate() {
    const tags = this.shadowRoot.querySelectorAll('code');
    this.mdParser.highlightElements(tags);
    const headings = this.rs.lookupHeadings(this.shadowRoot);
    if (headings && headings.length) {
      const index = this.rs.findCurrentHeading(headings);
      this.items.next([...headings.map(e => ({ elementRef: e.elementRef, title: e.textContent }))]);
      this.rs.navigateToAnchor(headings[index].elementRef);
    }
  }
  async fetch() {
    this.html = await this.mdParser.fetchMarkdown(
      'https://raw.githubusercontent.com/rxdi/starter-client-lit-html/master/README.md'
    );
  }
}
