import { gql } from "@apollo/client";

const GET_KEEPER = gql`
  query Keeper($keeperId: ID!) {
    keeper(id: $keeperId) {
      _id
      logs {
        message
        date
        variant
      }
      name
      network
      status
      system
      wallet
    }
  }
`;

export default GET_KEEPER;
