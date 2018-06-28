import { Module } from "@rxdi/core";
import { RendererService } from "./services/renderer";

@Module({
    services: [RendererService]
})
export class CommonModule {}