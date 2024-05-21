/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Button, Grid } from "@mui/material";
import { InfoRow } from "../../atoms";

import { gql, useMutation } from "@apollo/client";
import {
  RESTART_KEEPER,
  STOP_KEEPER,
  EXPORT_WALLET,
  ///
  START_MUT,
  STOP_MUT,
  EXIT_COLLATERAL_MUT,
  EXIT_SYSTEM_COIN_MUT,
} from "../../../data/queries";

const CHANGE_KEEPER_STATUS = gql`
  mutation changeKeeperStatus($keeperId: ID!) {
    changeKeeperStatus(keeperId: $keeperId)
  }
`;

/*
 case KeeperStatus.INITIALIZING:
        return "Initializing";
      case KeeperStatus.PREPARING:
        return "Preparing";
      case KeeperStatus.RUNNING:
        return "Running";
      case KeeperStatus.STOPPING:
        return "Stopping";
      case KeeperStatus.FAILED:
        return "Failed";
      case KeeperStatus.STOPPED:
        return "Stopped";
      case KeeperStatus.RECOVERING:
        return "Recovering"
*/

const renderStatus = (status) => {
  switch (status) {
    case 0:
      return "Initializing";
    case 1:
      return "Working";
    case 2:
      return "Stopping";
    case 3:
      return "Stopped";
  }
};

const KeeperInfo = ({ keeper, status, statusRefetch }) => {
  const [stopKeeper] = useMutation(STOP_MUT);
  const [startKeeper] = useMutation(START_MUT);

  const [restartKeeper] = useMutation(RESTART_KEEPER);
  const [exportWallet] = useMutation(EXPORT_WALLET);

  const KeeperAction = () => {
    if (!status) return null;
    if (status) {
      return (
        <Button
          onClick={async () => {
            //restartKeeper({ variables: { keeperId: keeper._id } })
            //  .then((r) => {
            //    console.log(r);
            //  })
            //  .catch((err) => {
            //    console.log(err);
            //  });
            await startKeeper({ variables: { keeperId: keeper._id } });
            statusRefetch();
          }}
          size="small"
          variant="contained"
          color="primary"
        >
          Start Keeper
        </Button>
      );
    } else if (status === 1) {
      return (
        <Button
          onClick={async () => {
            await stopKeeper({ variables: { keeperId: keeper._id } });
            statusRefetch();
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
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <InfoRow label="Status" value={renderStatus(status)}></InfoRow>
            <Button
              color="secondary"
              onClick={() => {
                exportWallet({ variables: { keeperId: keeper._id } }).then(
                  (data) => {
                    const exportdWalletData = data.data.exportWallet;
                    console.log(exportdWalletData);

                    const blob = new Blob([exportdWalletData], {
                      type: "application/json",
                    });
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(blob);
                    a.download = `0x${keeper.wallet}`;
                    a.click();
                    URL.revokeObjectURL(a.href);
                  }
                );
              }}
            >
              Export Wallet
            </Button>
          </div>
        </Grid>

        <Grid item md={6}>
          <KeeperAction />
        </Grid>

        <Grid item md={6}>
          {/*<InfoRow label="Task Status" value={keeper.taskStatus}></InfoRow>*/}
          <InfoRow label="Collateral" value={keeper.collateral}></InfoRow>
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
        {/*<Grid item md={6}>
          <InfoRow label="Collateral" value={keeper.collateral}></InfoRow>
            </Grid>*/}
      </Grid>
    </Paper>
  );
};

export default KeeperInfo;
