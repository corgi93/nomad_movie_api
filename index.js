import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/scheme.graphql",
  resolvers // resolvers추가
});

server.start(()=> console.log("Graphql is running on localhost:4000!"))