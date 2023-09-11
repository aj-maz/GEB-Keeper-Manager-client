import { gql } from "@apollo/client";

const SET_LOGS = gql`
  mutation setKeeperLogs($keeperId: String!) {
    setKeeperLogs(keeperId: $keeperId)
  }
`;

export default SET_LOGS;
