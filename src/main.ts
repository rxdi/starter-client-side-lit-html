import { Bootstrap } from '@rxdi/core';
import { AppModule } from './app/app.module';
const now = Date.now();
window.addEventListener('load', () => {
  Bootstrap(AppModule, {
    init: false,
  }).subscribe(() => console.log('App Started!'), err => console.error(err));
});

if (module['hot']) {
  module['hot'].dispose(() => (document.body.innerHTML = ''));
}
