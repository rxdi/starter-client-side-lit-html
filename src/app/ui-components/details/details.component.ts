
import {
  html,
  Component,
  OnInit,
  OnDestroy,
  OnUpdate,
  unsafeHTML,
  property,
  LitElement,
} from '@rxdi/lit-html';
import { style } from './details.component.css';
import { Inject } from '@rxdi/core';
import { MarkdownParserService } from '../../core/markdown-parser/markdown-parser.service';

@Component({
  selector: 'ui-components-details-component',
  style,
  template(this: DetailsComponent) {
    return html`
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
    console.log('DetailsComponent component updated');
  }
  async fetch() {
    this.html = await this.mdParser.fetchMarkdown('https://raw.githubusercontent.com/rxdi/starter-client-lit-html/master/README.md');
  }
}
