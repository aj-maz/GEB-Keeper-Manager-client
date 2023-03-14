/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { DashboardLayout, WalletsTable, NewWalletButton } from "../organisms";

const Wallets = ({ data, loading, error, refetch, generateNewWallet }) => {
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
        <NewWalletButton
          generateNewWallet={generateNewWallet}
          refetch={refetch}
        />
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
