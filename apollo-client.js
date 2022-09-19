import { ApolloClient, InMemoryCache } from "@apollo/client";
import { typeDefs } from "./graphql/schema";

const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
    typeDefs
});

export default client;