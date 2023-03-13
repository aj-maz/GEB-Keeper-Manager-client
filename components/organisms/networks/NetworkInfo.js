/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Divider, Typography } from "@mui/material";
import { PaddedContainer } from "../../atoms";

import { NetworkDetails } from "../../molecules";
import SystemsList from "./SystemsList";

const NetworkInfo = ({ network }) => {
  return (
    <Paper sx={{ width: "100%" }}>
      <NetworkDetails network={network} />
      <Divider />
      <PaddedContainer>
        <Typography variant="h6">Network Systems:</Typography>
        <SystemsList network={network} />
      </PaddedContainer>
    </Paper>
  );
};

export default NetworkInfo;
