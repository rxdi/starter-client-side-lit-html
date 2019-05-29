import { Module } from "@rxdi/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "./common/common.module";

@Module({
    imports: [CommonModule],
    bootstrap: [AppComponent]
})
export class AppModule {}