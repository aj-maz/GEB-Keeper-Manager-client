import { gql } from "@apollo/client";

const GET_KEEPER = gql`
  query Keeper($keeperId: ID!) {
    keeper(id: $keeperId) {
      _id
      collateral
      network
      status
      system
      options
      wallet
      logs
      unseenNotifsCount
      notifications {
        createdAt
        _id
        keeperAddress
        payload {
          context
          name
          stringifiedParams
        }
        seen
        uniqueHelper
      }
      balances {
        native
        system
        systemCoinJoin
        collateral
        collateralCoinJoin
      }
      transactions {
        processed
        keeperAddress
        hash
        data {
          block_signed_at
        }
        directEvents {
          decoded {
            name
            signature
            params {
              name
              type
              indexed
              decoded
              value
            }
          }
        }
      }
    }
  }
`;

export default GET_KEEPER;
