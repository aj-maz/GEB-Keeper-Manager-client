import { gql } from "@apollo/client";

const GET_KEEPER = gql`
  query Keeper($keeperId: ID!) {
    keeper(id: $keeperId) {
      _id
      collateral
      network
      status
      system
      options
      wallet
      logs
    }
  }
`;

export default GET_KEEPER;
