/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextField, Paper, Button } from "@mui/material";
import { ethers } from "ethers";
import { useState } from "react";

import { ADD_USER } from "../../../data/queries";
import { useMutation } from "@apollo/client";

const UsersForm = ({ refetch }) => {
  const [address, setAddress] = useState("");
  const [addUser] = useMutation(ADD_USER);

  return (
    <Paper
      css={css`
        padding: 1em;
        display: flex;
      `}
    >
      <TextField
        size="small"
        name="users-address"
        color="secondary"
        variant="outlined"
        label="User Address"
        fullWidth
        css={css`
          margin-right: 0.5em;
        `}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        error={!!(address && !ethers.isAddress(address))}
      />
      <Button
        onClick={() => {
          addUser({
            variables: {
              address,
            },
          }).then(() => {
            setAddress("");
            refetch();
          });
        }}
        disabled={!ethers.isAddress(address)}
        color="secondary"
      >
        ADD
      </Button>
    </Paper>
  );
};
export default UsersForm;
