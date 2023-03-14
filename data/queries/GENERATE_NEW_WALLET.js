import { gql } from "@apollo/client";

const GENERATE_NEW_WALLET = gql`
  mutation GenerateNewWallet($password: String!) {
    generateNewWallet(password: $password)
  }
`;

export default GENERATE_NEW_WALLET;
