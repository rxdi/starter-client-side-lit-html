import { FlexLayout } from '@rhtml/modifiers';
import { Form, FormGroup } from '@rxdi/forms';
import { Component, css, html, LitElement } from '@rxdi/lit-html';
import { InputStyle } from '@rxdi/ui-kit/styles/form/input';

import {
  EmailValidator,
  InputErrorTemplate,
  RequiredValidator,
} from './form.helpers';

@Component<FormsComponent>({
  selector: 'forms-view',
  styles: [
    InputStyle,
    css`
      .is-invalid {
        color: rgb(169, 68, 66);
        font-size: 13px;
      }
    `,
  ],
  modifiers: [...FlexLayout],
  template(this) {
    return html`
      <form
        name="user"
        style="margin: 10px;"
        @submit=${() => this.onSubmitForm()}
      >
        <p>Firstname</p>
        <input name="firstName" class="rx-input" type="text" />
        ${InputErrorTemplate(this.userForm.get('firstName'))}

        <p>Lastname</p>
        <input name="lastName" class="rx-input" type="text" />
        ${InputErrorTemplate(this.userForm.get('lastName'))}

        <p>Email</p>
        <input name="email" class="rx-input" type="text" />
        ${InputErrorTemplate(this.userForm.get('email'))}

        <rx-button
          fxLayoutAlign="center center"
          style="margin-top: 20px;"
          palette="danger"
          type="submit"
          >SUBMIT</rx-button
        >
      </form>

      <rx-divider></rx-divider>

      <h1 fxLayoutAlign="center">Form values</h1>

      <div fxLayout="row wrap" fxLayoutGap="20px">
        <rx-card palette="primary">
          <div fxLayoutAlign="center" style="padding: 20px;">
            "${this.userForm.value.firstName}"
          </div>
        </rx-card>

        <rx-card palette="warning">
          <div fxLayoutAlign="center" style="padding: 20px;">
            "${this.userForm.value.lastName}"
          </div>
        </rx-card>
        <rx-card palette="danger">
          <div fxLayoutAlign="center" style="padding: 20px;">
            "${this.userForm.value.email}"
          </div>
        </rx-card>
      </div>

      <rx-divider></rx-divider>
    `;
  },
})
export class FormsComponent extends LitElement {
  @Form({
    name: 'user',
    strategy: 'blur',
    // strict: true,
  })
  userForm = new FormGroup({
    firstName: ['', [RequiredValidator]],
    lastName: ['', [RequiredValidator]],
    email: ['', [RequiredValidator, EmailValidator]],
  });

  // OnUpdateFirst() {
  //   this.userForm.valueChanges.subscribe(console.log);
  // }

  async onSubmitForm() {
    await this.userForm.updateValueAndValidity();
    if (this.userForm.valid) {
      alert(JSON.stringify(this.userForm.value));
    }
  }
}
