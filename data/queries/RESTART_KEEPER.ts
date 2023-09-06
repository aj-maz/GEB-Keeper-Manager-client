import { gql } from "@apollo/client";

const RESTART_KEEPER = gql`
  mutation restartKeeper($keeperId: String!) {
    restartKeeper(keeperId: $keeperId)
  }
`;

export default RESTART_KEEPER;
