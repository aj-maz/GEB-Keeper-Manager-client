import { gql } from "@apollo/client";

const GET_NETWORKS = gql`
  query Networks {
    networks {
      id
      name
      rpc_uri
      systems {
        contracts
        graph_endpoint
        name
      }
    }
  }
`;

export default GET_NETWORKS;
