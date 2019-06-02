import { Component } from '@rxdi/core';
import { BaseComponent } from '../shared/base.component';
import { html } from 'lit-html';
import { customElement } from 'lit-element';
import '@polymer/paper-spinner/paper-spinner.js';

@customElement('consultants-component')
@Component()
export class ConsultantsComponent extends BaseComponent {
    render() {
        return html`
        <paper-spinner active></paper-spinner>
        `;
    }
}
