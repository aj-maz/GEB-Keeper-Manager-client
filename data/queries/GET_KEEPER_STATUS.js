import { gql } from "@apollo/client";

const GET_KEEPER_STATUS = gql`
  query Query($keeperId: String!) {
    keeperStatus(keeperId: $keeperId)
  }
`;

export default GET_KEEPER_STATUS;
