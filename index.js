import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolver: resolvers // es6이후에선 resolvers만 써도 됨
});

server.start(()=> console.log("Graphql is running on localhost:4000!"))
