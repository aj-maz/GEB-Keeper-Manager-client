import { gql } from "@apollo/client";

const START_KEEPER = gql`
  mutation startKeeper(
    $system: String!
    $network: String!
    $collateral: String!
    $privateKey: String!
    $options: [String!]!
  ) {
    startKeeper(
      system: $system
      network: $network
      collateral: $collateral
      privateKey: $privateKey
      options: $options
    ) {
      _id
    }
  }
`;

export default START_KEEPER;
