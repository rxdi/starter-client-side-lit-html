import { Module } from "@rxdi/core";
import { CoreModule } from './core/core.module';
import { AppComponent } from "./app.component";

@Module({
    imports: [CoreModule],
    bootstrap: [AppComponent]
})
export class AppModule {}