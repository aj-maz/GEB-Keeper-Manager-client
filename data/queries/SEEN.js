import { gql } from "@apollo/client";

const SEEN = gql`
  mutation seen($address: ID!) {
    seen(address: $address)
  }
`;

export default SEEN;
