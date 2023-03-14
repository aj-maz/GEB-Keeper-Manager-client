/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  ButtonBase,
  Typography,
  Avatar,
  TextField,
  DialogContent,
} from "@mui/material";

const CreateNewWallet = ({ value, onChange }) => {
  return (
    <DialogContent>
      <Typography variant="body1">
        Just choose a proper password. The system will generate the wallet
        needed for the keeper.{" "}
        <span
          css={(theme) =>
            css`
              color: ${theme.palette.secondary.main};
            `
          }
        >
          You need to add ETH and system coin for this address ( or use flash
          swaps ) to be used by keeper.
        </span>
      </Typography>
      <TextField
        variant="outlined"
        type="password"
        label="Wallet Password"
        size="small"
        fullWidth
        color="secondary"
        css={css`
          margin-top: 1em;
        `}
        value={value}
        onChange={onChange}
      />
    </DialogContent>
  );
};

export default CreateNewWallet;
