import { Bootstrap } from '@rxdi/core';
import { AppModule } from './app/app.module';

Bootstrap(AppModule)
    .subscribe(
        () => console.log('App Started!'),
        (err) => console.error(err)
    );