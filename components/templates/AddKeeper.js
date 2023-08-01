/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { DashboardLayout, CreateKeeperSteps } from "../organisms";

const Keepers = ({ data, loading, error, startKeeper }) => {
  console.log(data, loading);

  const wallets = data && data.wallets ? data.wallets : [];
  const networks = data && data.networks ? data.networks : [];

  return (
    <DashboardLayout>
      {loading && data ? (
        <Typography variant="h6">Loading ...</Typography>
      ) : (
        <CreateKeeperSteps/>
      )}
    </DashboardLayout>
  );
};

export default Keepers;
