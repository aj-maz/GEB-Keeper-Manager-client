/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Typography, Avatar } from "@mui/material";
import { ethers } from "ethers";

const KeeperBalances = ({ keeper }) => {
  console.log(ethers.formatEther(keeper.balances.native));

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
          <Button disabled variant="contained">
            Exit System Coins From CoinJoin
          </Button>
          <br />
          <Button
            css={css`
              margin-top: 0.5em;
            `}
            variant="contained"
            disabled
          >
            Exit Collateral From CoinJoin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeeperBalances;
