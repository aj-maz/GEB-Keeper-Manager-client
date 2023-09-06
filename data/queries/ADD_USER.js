import { gql } from "@apollo/client";

const ADD_USER = gql`
  mutation addUser($address: String!) {
    addUser(address: $address)
  }
`;

export default ADD_USER;
