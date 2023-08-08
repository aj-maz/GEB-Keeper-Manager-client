/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Grid } from "@mui/material";
import { InfoRow } from "../../atoms";

const KeeperInfo = ({ keeper }) => {
  return (
    <Paper
      css={css`
        padding: 1em;
      `}
    >
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InfoRow label="Wallet" value={keeper.wallet}></InfoRow>
        </Grid>
        <Grid item md={6}>
          <InfoRow label="Network" value={keeper.network}></InfoRow>
        </Grid>
        <Grid item md={6}>
          <InfoRow label="Status" value={keeper.status}></InfoRow>
        </Grid>
        <Grid item md={6}>
          <InfoRow label="System" value={keeper.system}></InfoRow>
        </Grid>
        <Grid item md={12}>
          <InfoRow label="Collateral" value={keeper.collateral}></InfoRow>

        </Grid>
      </Grid>
    </Paper>
  );
};

export default KeeperInfo;
