import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import * as path from "path";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./modules/users/user.resolvers";
import sanitizedConfig from "./config";
import { RecipeResolver } from "./_buck_up/resolvers/recipe-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver,RecipeResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    // emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen(sanitizedConfig.PORT);
  console.log(`Server is running, GraphQL Playground available at zxczxc`);
}

bootstrap();