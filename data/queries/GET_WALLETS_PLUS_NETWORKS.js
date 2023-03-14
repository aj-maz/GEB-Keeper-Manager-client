import { gql } from "@apollo/client";

const GET_WALLETS_PLUS_NETWORKS = gql`
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
    wallets {
      address
      networkBalances {
        amount
        network
      }
    }
  }
`;

export default GET_WALLETS_PLUS_NETWORKS;
