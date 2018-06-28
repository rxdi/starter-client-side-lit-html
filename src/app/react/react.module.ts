import { Module } from "@rxdi/core";
import { ReactComponent } from "./components/react.component";
import { ReactiveService } from "./components/react.service";

@Module({
    components: [ReactComponent],
    services: [ReactiveService]
})
export class ReactModule {}