import { gql } from "@apollo/client";

const EXPORT_WALLET = gql`
  mutation exportWallet($keeperId: String!) {
    exportWallet(keeperId: $keeperId)
  }
`;

export default EXPORT_WALLET;
