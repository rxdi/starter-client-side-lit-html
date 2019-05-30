import { Bootstrap } from '@rxdi/core';
import { AppModule } from './app/app.module';

window.addEventListener('load', () => {
  Bootstrap(AppModule, {
    init: false,
    initOptions: {
      components: true,
      services: true
    }
  }).subscribe(() => console.log('App Started!'), err => console.error(err));
});

if (module['hot']) {
  module['hot'].dispose(() => (document.body.innerHTML = ''));
}
