

import { gql } from "@apollo/client";

const GET_SYSTEMS = gql`
{
  systems {
    name
    systemCoin
    networks {
      nativeCoin
      collaterals {
        name
        address
      }
    }
  }
}
`;

export default GET_SYSTEMS;
