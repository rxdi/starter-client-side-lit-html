import { Bootstrap } from '@rxdi/core';
import { AppModule } from './app/app.module';

window.addEventListener('load', () => {
  Bootstrap(AppModule).subscribe(() => console.log('App Started!'), console.error.bind(console));
});

if (module['hot']) {
  module['hot'].dispose(() => (document.body.innerHTML = ''));
}
