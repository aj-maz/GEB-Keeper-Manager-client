import { gql } from "@apollo/client";

const GET_KEEPERS = gql`
  query Keepers {
    keepers {
      _id
      name
      network
      status
      system
      wallet
    }
  }
`;

export default GET_KEEPERS;
