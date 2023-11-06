// src/apollo.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://us-central1-ss-devops.cloudfunctions.net/GraphQL",
  }),
});

export default client;
