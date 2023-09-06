import { gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      _id
      address
    }
  }
`;

export default GET_USERS;
