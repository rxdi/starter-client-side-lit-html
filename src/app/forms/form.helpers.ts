import { html } from '@rxdi/lit-html';

export const EmailValidator = (element: HTMLInputElement) => {
  const regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
  if (!regex.test(element.value)) {
    element.classList.add('rx-danger');
    return {
      key: 'email-validator',
      message: 'Email is not valid',
    };
  }
  element.classList.remove('rx-danger');
};

export const RequiredValidator = (element: HTMLInputElement) => {
  if (!element.value) {
    element.classList.add('rx-danger');
    return {
      key: 'required',
      message: 'Please fill out this field.',
    };
  }
  element.classList.remove('rx-danger');
};

export function InputErrorTemplate(input: HTMLInputElement) {
  if (input && !input.checkValidity()) {
    return html` <div class="is-invalid">${input.validationMessage}</div> `;
  }
  return '';
}
