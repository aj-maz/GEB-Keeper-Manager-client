import { gql } from "@apollo/client";

const GET_WALLETS = gql`
  query Wallets {
    wallets {
      address
    }
  }
`;

export default GET_WALLETS;
