import { Module } from "@rxdi/core";
import { CommonModule } from './common/common.module';

@Module({
    imports: [CommonModule]
})
export class AppModule {}