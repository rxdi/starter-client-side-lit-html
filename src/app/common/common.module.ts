import { Module } from "@rxdi/core";
import { GraphqlService } from "./helpers/graphql.service";

@Module({
    services: [GraphqlService]
})
export class CommonModule {}