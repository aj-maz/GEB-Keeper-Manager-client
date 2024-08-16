import { gql } from "@apollo/client";

const GET_SYSTEMS = gql`
  {
    systems {
      name
      networks {
        nativeCoin
        systemCoin
        name
        collaterals {
          name
          address
          flashSwapEnabled
        }
      }
    }
  }
`;

export default GET_SYSTEMS;
