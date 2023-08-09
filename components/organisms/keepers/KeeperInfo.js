/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Button, Grid } from "@mui/material";
import { InfoRow } from "../../atoms";

import { gql, useMutation } from "@apollo/client";

const CHANGE_KEEPER_STATUS = gql`
  mutation changeKeeperStatus($keeperId: ID!) {
    changeKeeperStatus(keeperId: $keeperId)
  }
`;

const KeeperInfo = ({ keeper }) => {
  const [changeKeeperStatus] = useMutation(CHANGE_KEEPER_STATUS);

  console.log(keeper);

  const KeeperAction = () => {
    if (!keeper) return null;
    if (keeper.status === "failed" || keeper.status === "stopped") {
      return (
        <Button
          onClick={() => {
            changeKeeperStatus({ variables: { keeperId: keeper._id } });
          }}
          size="small"
          variant="contained"
          color="primary"
        >
          Start Keeper
        </Button>
      );
    } else if (keeper.status === "running") {
      return (
        <Button
          onClick={() => {
            changeKeeperStatus({ variables: { keeperId: keeper._id } });
          }}
          size="small"
          variant="outlined"
          color="warning"
        >
          Stop Keeper
        </Button>
      );
    } else {
      return (
        <Button size="small" disabled>
          No Action Available
        </Button>
      );
    }
  };

  return (
    <Paper
      css={css`
        padding: 1em;
      `}
    >
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InfoRow label="Status" value={keeper.status}></InfoRow>
        </Grid>
        <Grid item md={6}>
          <KeeperAction />
        </Grid>
        <Grid item md={6}>
          <InfoRow label="Wallet" value={keeper.wallet}></InfoRow>
        </Grid>
        <Grid item md={6}>
          <InfoRow label="Network" value={keeper.network}></InfoRow>
        </Grid>

        <Grid item md={6}>
          <InfoRow label="System" value={keeper.system}></InfoRow>
        </Grid>
        <Grid item md={6}>
          <InfoRow label="Collateral" value={keeper.collateral}></InfoRow>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default KeeperInfo;
