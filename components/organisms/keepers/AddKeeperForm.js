/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Button,
  Typography,
  Paper,
  Grid,
  TextField,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const AddKeeperForm = ({ wallets, networks, startKeeper }) => {
  const router = useRouter();
  const [keeperName, setKeeperName] = useState("");
  const [wallet, setWallet] = useState(null);
  const [network, setNetwork] = useState(null);
  const [system, setSystem] = useState(null);
  const [flashSwap, setFlashSwap] = useState(false);

  const [running, setRunning] = useState(false);

  useEffect(() => {
    setSystem(null);
  }, [network]);

  const selectedNetwork = networks.find((net) => net.name === network);

  return (
    <Paper
      css={css`
        padding: 1em;
      `}
    >
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TextField
            variant="outlined"
            label="Keeper Name"
            fullWidth
            size="small"
            name="keeper-name"
            color="secondary"
            value={keeperName}
            onChange={(e) => setKeeperName(e.target.value)}
          />
        </Grid>
        <Grid item md={6}>
          <FormControl color="secondary" size="small" fullWidth>
            <InputLabel id="Address">Wallet</InputLabel>
            <Select
              value={wallet}
              label="Wallet"
              onChange={(e) => {
                setWallet(e.target.value);
              }}
            >
              {wallets.map((wallet) => (
                <MenuItem key={wallet.address} value={wallet.address}>
                  {wallet.address}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl color="secondary" size="small" fullWidth>
            <InputLabel id="Address">Network</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={network}
              label="Network"
              onChange={(e) => {
                setNetwork(e.target.value);
              }}
            >
              {networks.map((network) => (
                <MenuItem key={network.name} value={network.name}>
                  {network.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          {selectedNetwork &&
            (selectedNetwork.systems.length ? (
              <FormControl color="secondary" size="small" fullWidth>
                <InputLabel id="Address">System</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={system}
                  label="System"
                  onChange={(e) => {
                    setSystem(e.target.value);
                  }}
                >
                  {selectedNetwork.systems.map((system) => (
                    <MenuItem key={system.name} value={system.name}>
                      {system.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  height: 100%;
                `}
              >
                <Typography
                  css={(theme) =>
                    css`
                      color: ${theme.palette.error.main};
                    `
                  }
                  variant="body1"
                >
                  This network has no system
                </Typography>
              </div>
            ))}
        </Grid>
        <Grid item md={6}>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <Checkbox
              value={flashSwap}
              onChange={() => setFlashSwap((v) => !v)}
              color="secondary"
              size="small"
            />
            <Typography
              css={css`
                margin-left: 0.5em;
              `}
              variant="body1"
            >
              Flash Swap Enabled
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div
        css={css`
          display: flex;
          flex-direction: row-reverse;
          margin-top: 0.25em;
        `}
      >
        <Button
          disabled={!(keeperName && wallet && network && system) || running}
          variant="contained"
          color="secondary"
          onClick={() => {
            setRunning(true);
            startKeeper({
              variables: {
                keeperName,
                wallet,
                network,
                system,
                flashSwap,
              },
            })
              .then((r) => {
                setRunning(false);

                //router.push(`/keeper/details/${keeperName}`);
              })
              .catch((err) => {
                setRunning(false);

                console.log(err);
              });
          }}
        >
          {running ? "Wait for it" : "Run Keeper"}
        </Button>
      </div>
    </Paper>
  );
};

export default AddKeeperForm;
