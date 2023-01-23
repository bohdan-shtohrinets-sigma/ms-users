import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import GraphQLJSON from 'graphql-type-json';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      resolvers: { JSON: GraphQLJSON },
      autoSchemaFile: {
        path: join(process.cwd(), 'src/schema.gql'),
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
