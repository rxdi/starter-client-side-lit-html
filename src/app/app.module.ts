import { Module } from "@rxdi/core";
import { AppComponent } from "./app.component";
import { GraphqlModule } from "./graphql/graphql.module";

@Module({
    imports: [GraphqlModule.forRoot({uri: 'https://questups.com/api/graphql'})],
    bootstrap: [AppComponent]
})
export class AppModule {}