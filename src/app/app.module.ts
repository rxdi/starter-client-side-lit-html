import { Module } from "@rxdi/core";
import { AppComponent } from "./app.component";

@Module({
    bootstrap: [AppComponent]
})
export class AppModule {}