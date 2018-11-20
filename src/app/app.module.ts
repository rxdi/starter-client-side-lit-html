import { Module } from "@rxdi/core";
import { RouterModule } from "./router";
import { AppComponent } from "./app.component";

@Module({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppComponent
            },
            {
                path: 'lazy', component: import('./lazy.component')
            },
            {
                path: 'lazy2', component: import('./lazy.component')
            },
            {
                path: 'lazy3', component: import('./lazy.component')
            }
        ])
    ]
})
export class AppModule {}