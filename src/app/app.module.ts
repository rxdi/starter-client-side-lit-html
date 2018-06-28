import { Module } from "@rxdi/core";
import { CommonModule } from './common/common.module';
import { ReactModule } from "./react/react.module";

@Module({
    imports: [
        CommonModule,
        ReactModule
    ]
})
export class AppModule {}