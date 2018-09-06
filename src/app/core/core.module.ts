import { Module } from "@rxdi/core";
import { RendererService } from "./services/renderer";
import { AppService } from "./services/app.service";

@Module({
    services: [
        AppService,
        RendererService
    ]
})
export class CoreModule {}