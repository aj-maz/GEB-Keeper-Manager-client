/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Grid } from "@mui/material";
import { InfoRow } from "../../atoms";

const KeeperLogs = ({ keeper }) => {
  console.log(keeper);
  return (
    <Paper
      css={(theme) => css`
        padding: 1em;
        max-height: 500px;
        overflow: auto;
        color: #ffffff;
        background-color: ${theme.palette.background.default};
      `}
    >
      {[...keeper.logs].reverse().map((log) => (
        <Typography
          key={log.message}
          css={css`
            margin-bottom: 1em;
            font-family: "Courier New", Courier, monospace;
            font-weight: 600;
          `}
          variant="body2"
        >
          {log.message}
        </Typography>
      ))}
    </Paper>
  );
};

export default KeeperLogs;
