import { Module } from "@rxdi/core";
import { RouterModule } from "@rxdi/router";

@Module({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: import('./app.component')
            },
            {
                path: 'lazy', component: import('./lazy.component')
            }
        ])
    ]
})
export class AppModule {}