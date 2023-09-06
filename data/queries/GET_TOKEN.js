import { gql } from "@apollo/client";

const GET_TOKEN = gql`
  mutation getToken($address: String!, $signature: String!) {
    getToken(address: $address, signature: $signature)
  }
`;

export default GET_TOKEN;
