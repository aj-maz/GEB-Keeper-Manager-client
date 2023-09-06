import { gql } from "@apollo/client";

const GET_KEEPERS = gql`
  query Keepers {
    keepers {
      _id
      collateral
      network
      status
      system
      options
      wallet
      unseenNotifsCount
    }
  }
`;

export default GET_KEEPERS;
