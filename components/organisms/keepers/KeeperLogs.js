/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Grid } from "@mui/material";
import { InfoRow } from "../../atoms";
import moment from "moment";

const KeeperLogs = ({ keeper }) => {
  const renderColor = ({ variant, theme }) => {
    if (variant === "WARNING") return theme.palette.warning.main;
    if (variant === "INFO") return theme.palette.info.main;
    if (variant === "ERROR") return theme.palette.error.main;
    return theme.palette.secondary.main;
  };

  return (
    <Paper
      css={(theme) => css`
        padding: 1em;
        max-height: calc(100vh - 270px);
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
          <span
            css={(theme) =>
              css`
                color: ${theme.palette.lime.main};
              `
            }
          >
            {moment(parseInt(log.date)).format()}
          </span>{" "}
          |{" "}
          <span
            css={(theme) =>
              css`
                color: ${renderColor({ theme, variant: log.variant })};
              `
            }
          >
            {log.variant}
          </span>{" "}
          |{log.message}
        </Typography>
      ))}
    </Paper>
  );
};

export default KeeperLogs;
