import { Module } from "@rxdi/core";
import { ReactComponent } from "./components/react.component";

@Module({
    components: [ReactComponent]
})
export class ReactModule {}