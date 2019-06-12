import { html, css, Component } from '@rxdi/lit-html';

/**
 * @customElement footer-component
 */
@Component({
  selector: 'footer-component',
  useShadow: true,
  style: css`
    .content {
      margin-right: 20px;
      font-size: 12px;
    }

    .container {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 60px;
      color: #226e6f;
      background-color: #21252b;
      padding-top: 20px;
    }

    .flex {
    display: flex;
}
.spacer {
    flex: 1 3 auto;
}

.pointer {
    cursor: pointer;
}

    .context {
      color: #4b5055;
      margin-top: 10px;
    }
  `,
  template() {
    return html`
      <div class="container">
        <div class="flex center">
          <span class="spacer"></span>
          <div class="content">
            Terms
          </div>
          <div class="content">
            Privacy Policy
          </div>
          <div routerLink="/release-notes" class="content pointer">
            Release notes
          </div>
          <span class="spacer"></span>
        </div>
        <div class="flex center context">
          <span class="spacer"></span>
          <div class="content">
            2019 Reactive Solutions, Inc. All rights reserved
          </div>
          <span class="spacer"></span>
        </div>
      </div>
    `;
  }
})
export class FooterComponent extends HTMLElement {}
