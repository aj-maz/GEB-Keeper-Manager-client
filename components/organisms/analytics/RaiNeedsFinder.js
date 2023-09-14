/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Slider } from "@mui/material";
import { useState } from "react";

const RaiNeedsFinder = ({ data, loading, error }) => {
  const [ethPrice, setEthPrice] = useState(1600);

  if (!data) return <div></div>;

  const safes = [...data.raiSafes].filter((safes) => Number(safes.debt) > 0);

  const liquidableSafes = safes.filter(
    (safe) => Number(safe.liquidationPrice) > ethPrice
  );

  const RaiNeeded = liquidableSafes.reduce((pV, cV) => {
    return pV + Number(cV.debt);
  }, 0);

  return (
    <Paper
      css={css`
        margin-bottom: 2em;
        width: 700px;
        padding: 1em;
        min-height: 150px;
      `}
    >
      <Slider
        value={ethPrice}
        onChange={(e, nv) => setEthPrice(nv)}
        min={0}
        max={2000}
        color="secondary"
      />
      <Typography variant="body1">
        When eth price gets to {ethPrice} $USD we need{" "}
        <span
          css={(theme) =>
            css`
              font-weight: bold;
              color: ${theme.palette.secondary.main};
            `
          }
        >
          {RaiNeeded.toFixed(2)}
        </span>{" "}
        amount RAI to participate in the auctions.
      </Typography>
    </Paper>
  );
};
export default RaiNeedsFinder;
