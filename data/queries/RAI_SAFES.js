import { gql } from "@apollo/client";

const RAI_SAFES = gql`
  query {
    raiSafes {
      id
      debt
      liquidationPrice
    }
  }
`;

export default RAI_SAFES;
