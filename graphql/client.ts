import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const apollo_client = new ApolloClient({
  uri: process.env.EXPO_PUBLIC_GRAPHQL_SERVER_URL, // ,
  cache: new InMemoryCache(),
  headers: {
    // authorization: "Bearer myjwt",
    "API-KEY": process.env.EXPO_PUBLIC_GRAPHQL_API_KEY!,
  },
});

console.log("Apollo Client is ready");
console.log(process.env.EXPO_PUBLIC_GRAPHQL_SERVER_URL);
