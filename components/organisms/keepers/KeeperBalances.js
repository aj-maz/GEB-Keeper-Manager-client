/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Typography, Avatar } from "@mui/material";
import { ethers } from "ethers";
import { gql, useMutation } from "@apollo/client";

import {
  EXIT_COLLATERAL_MUT,
  EXIT_SYSTEM_COIN_MUT,
} from "../../../data/queries";

const KeeperBalances = ({ keeper, status }) => {
  const [exitCollateral] = useMutation(EXIT_COLLATERAL_MUT);
  const [exitSystemCoin] = useMutation(EXIT_SYSTEM_COIN_MUT);

  return (
    <div
      css={(theme) =>
        css`
          border: 2px solid ${theme.palette.divider};
          border-radius: 8px;
          padding: 1em;
        `
      }
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>
          <Typography variant="body1">
            Native Balance:{" "}
            {Number(ethers.formatEther(keeper.balances.native)).toFixed(4)}
          </Typography>
          <Typography variant="body1">
            System Coin Balance:{" "}
            {Number(ethers.formatEther(keeper.balances.system)).toFixed(4)}
          </Typography>
          <Typography variant="body1">
            Collateral Coin Balance:{" "}
            {Number(ethers.formatEther(keeper.balances.collateral)).toFixed(4)}
          </Typography>
          <Typography variant="body1">System CoinJoin Balance: ????</Typography>
          <Typography variant="body1">
            Collateral CoinJoin Balance: ????
          </Typography>
        </div>
        <div>
          <Button
            disabled={status !== 3}
            variant="contained"
            onClick={async () => {
              await exitSystemCoin({ variables: { keeperId: keeper._id } });
              alert("exiting system coin request sent. please wait.");
            }}
          >
            Exit System Coins From CoinJoin
          </Button>
          <br />
          <Button
            css={css`
              margin-top: 0.5em;
            `}
            variant="contained"
            disabled={status !== 3}
            onClick={async () => {
              await exitCollateral({ variables: { keeperId: keeper._id } });
              alert("exiting collateral request sent. please wait.");
            }}
          >
            Exit Collateral From CoinJoin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeeperBalances;
