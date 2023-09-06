import { gql } from "@apollo/client";

const STOP_KEEPER = gql`
  mutation stopKeeper($keeperId: String!) {
    stopKeeper(keeperId: $keeperId)
  }
`;

export default STOP_KEEPER;
