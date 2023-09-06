import { gql } from "@apollo/client";

const GET_NONCE = gql`
  mutation getNonce($address: String!) {
    getNonce(address: $address)
  }
`;

export default GET_NONCE;
