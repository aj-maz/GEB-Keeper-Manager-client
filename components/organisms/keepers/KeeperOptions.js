/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Checkbox, Typography, Paper } from "@mui/material";

const optionsList = [
  {
    label: "Bid Only",
    value: "bid-only",
    default: false,
    description: `Do not take opportunities to create new auctions`,
  },
  {
    label: "Start Auction Only",
    value: "start-auctions-only",
    default: false,
    description: `Do not bid on auctions. This includes flash swaps`,
  },
  {
    label: "Keep system coin in SAFEEngine on exit",
    value: "keep-system-coin-in-safe-engine-on-exit",
    default: false,
    description: `Retain system coin in the SAFE Engine on exit, saving gas when restarting the keeper`,
  },
  {
    label: "Keep collateral in SAFEEngine on exit",
    value: "keep-collateral-in-safe-engine-on-exit",
    default: false,
    description: `Retain collateral in the SAFE Engine on exit`,
  },
  {
    label: "Swap Collateral After Auction",
    value: "swap-collateral",
    default: true,
    description: `After exiting won collateral, swap it on Uniswap for system coin`,
  },
  {
    label: "Flash Swap",
    value: "flash-swap",
    default: false,
    description: `Use uniswap flash swaps to liquidate and settle auctions. No system coin or collateral is needed`,
  },
];

const KeeperOptions = ({ options, handleKeeperOptions }) => {
  return (
    <div>
      <Paper
        css={css`
          padding: 1em;
          margin-top: 1em;
          margin-bottom: 1em;
        `}
      >
        <Typography variant="body1">
          In the production scenario it's best to run atleast 2 keeper for each
          collateral type in the system. One that is{" "}
          <span
            css={(theme) =>
              css`
                color: ${theme.palette.secondary.main};
              `
            }
          >
            Start Auction Only
          </span>{" "}
          and one that is{" "}
          <span
            css={(theme) =>
              css`
                color: ${theme.palette.secondary.main};
              `
            }
          >
            Bid Only
          </span>
          .
        </Typography>
      </Paper>
      {optionsList.map((option) => (
        <div key={option.value}>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <Checkbox
              checked={new Set(options).has(option.value)}
              onClick={() => handleKeeperOptions(option.value)}
              color="secondary"
              css={css`
                margin-right: 0.5em;
              `}
            />
            <Typography variant="body1">{option.label}</Typography>
          </div>
          <Typography
            css={(theme) =>
              css`
                color: ${theme.palette.secondary.main};
              `
            }
            variant="body2"
          >
            {option.description}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default KeeperOptions;
