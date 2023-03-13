/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { DashboardLayout, WalletsTable, NewWalletButton } from "../organisms";

const Wallets = ({ data, loading, error }) => {
  const wallets = data ? data.wallets : [];
  return (
    <DashboardLayout>
      <div
        css={css`
          display: flex;
          margin-bottom: 1em;
          flex-direction: row-reverse;
        `}
      >
        <NewWalletButton />
      </div>
      {loading && !data ? (
        <Typography variant="h6">Loading ...</Typography>
      ) : (
        <WalletsTable wallets={wallets} />
      )}
    </DashboardLayout>
  );
};

export default Wallets;
