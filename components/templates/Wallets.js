/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DashboardLayout, WalletsTable, NewWalletButton } from "../organisms";

const Wallets = () => {
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
      <WalletsTable />
    </DashboardLayout>
  );
};

export default Wallets;
