import './polyfills';
import { Bootstrap } from '@rxdi/core';
import { AppModule } from './app/app.module';

Bootstrap(AppModule, {
    init: false,
    initOptions: {
        services: true
    },
    logger: {
        logging: true,
        date: true,
        hashes: true,
        exitHandler: true,
        fileService: true
    }
})
.subscribe(
    () => console.log('App Started!'),
    (err) => console.error(err)
);


if (module['hot']) {
    module['hot'].dispose(() => document.body.innerHTML = '')
}


