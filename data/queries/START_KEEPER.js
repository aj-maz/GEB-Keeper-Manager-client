import { gql } from "@apollo/client";

const START_KEEPER = gql`
  mutation StartKeeper(
    $keeperName: String!
    $wallet: String!
    $network: String!
    $system: String!
    $flashSwap: Boolean!
  ) {
    startKeeper(
      keeperName: $keeperName
      wallet: $wallet
      network: $network
      system: $system
      flashSwap: $flashSwap
    )
  }
`;

export default START_KEEPER;
