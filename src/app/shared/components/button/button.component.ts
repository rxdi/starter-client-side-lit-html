import { Component } from '@rxdi/core';
import {
  customElement,
  LitElement,
  html,
  css,
  property,
  TemplateResult
} from 'lit-element';
import { Router } from '@rxdi/router';

type ButtonType = 'normal' | 'active' | 'disabled';

@customElement('button-component')
@Component()
export class ButtonComponent extends LitElement {
  static styles = css`
    li {
      list-style-type: none;
    }

    .pointer {
      cursor: pointer;
    }
  `;
  @property() type: ButtonType = 'normal';
  @property() href: string;
  @property() text: string;
  @property() css: string;

  render() {
    if (this.type === 'normal') {
      this.css = this.getClass();
    } else if (this.type === 'active') {
      this.css = this.getClassActive();
    } else if (this.type === 'disabled') {
      this.css = this.getClassDisabled();
    }
    return html`
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      ${this.getButton()}
    `;
  }

  private getButton() {
    return html`
      ${this.getMixinsClickable()}
    `;
  }

  private getClassActive() {
    return 'text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white';
  }
  private getClassDisabled() {
    return 'block py-2 px-4 text-gray-400 cursor-not-allowed';
  }

  private getClass() {
    return 'text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4';
  }

  private getMixinsClickable() {
    if (this.href) {
      return this.getClickableInput();
    } else {
      return this.getNonClickableInput();
    }
  }

  private getNonClickableInput() {
    return html`
      <li class="flex-1 mr-2">
        <a class="${this.css}">${this.text}</a>
      </li>
    `;
  }

  private getClickableInput() {
    return html`
      <li class="flex-1 mr-2 pointer">
        <a class="${this.css}" @click=${() => Router().go(this.href)}
          >${this.text}</a
        >
      </li>
    `;
  }
}
