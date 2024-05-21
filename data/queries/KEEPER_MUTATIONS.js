import { gql } from "@apollo/client";

export const START_MUT = gql`
  mutation StartMut($keeperId: String!) {
    startMut(keeperId: $keeperId)
  }
`;

export const STOP_MUT = gql`
  mutation StopMut($keeperId: String!) {
    stopMut(keeperId: $keeperId)
  }
`;

export const EXIT_COLLATERAL_MUT = gql`
  mutation ExitCollateralMut($keeperId: String!) {
    exitCollateralMut(keeperId: $keeperId)
  }
`;

export const EXIT_SYSTEM_COIN_MUT = gql`
  mutation ExitSystemCoinMut($keeperId: String!) {
    exitSystemCoinMut(keeperId: $keeperId)
  }
`;
