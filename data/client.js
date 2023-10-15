import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";

const useClient = () => {
  const graphqlServer = process.env.NEXT_PUBLIC_GRAPHQL_URL || "/api";

  const basicClient = new ApolloClient({
    link: graphqlServer,
    cache: new InMemoryCache(),
  });

  const [client, setClient] = useState(basicClient);

  useEffect(() => {
    const token = localStorage.getItem("keeper-manager-token");

    console.log(token);

    const httpLink = createHttpLink({
      uri: graphqlServer, // Replace with your GraphQL server's URI
    });

    const authLink = setContext((_, { headers }) => {
      // If the token exists in localStorage, add it to the headers
      if (token) {
        return {
          headers: {
            ...headers,
            authorization: `${token}`,
          },
        };
      }
      return {
        headers,
      };
    });

    // Create the Apollo Client
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    setClient(client);
  }, []);

  return client;
};

export default useClient;
