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
} from "@mui/material";

const AddKeeperForm = () => {
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
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            variant="outlined"
            label="Address"
            fullWidth
            size="small"
            name="keeper-address"
            color="secondary"
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            variant="outlined"
            label="Network"
            fullWidth
            size="small"
            name="keeper-network"
            color="secondary"
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            variant="outlined"
            label="System"
            fullWidth
            size="small"
            name="keeper-system"
            color="secondary"
          />
        </Grid>
        <Grid item md={6}>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <Checkbox color="secondary" size="small" />
            <Typography
              css={css`
                margin-left: 0.5em;
              `}
              variant="body1"
            >
              Flash Proxy Enabled
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
        <Button variant="contained" color="secondary">
          Run Keeper
        </Button>
      </div>
    </Paper>
  );
};

export default AddKeeperForm;
