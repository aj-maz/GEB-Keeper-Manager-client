/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Button } from "@mui/material";
import { InfoRow } from "../../atoms";
import moment from "moment";
import { useState } from "react";
import { SET_LOGS } from "../../../data/queries";
import { useMutation } from "@apollo/client";

const KeeperLogs = ({ keeper }) => {
  const [limit, setLimit] = useState(50);

  const [setLogs] = useMutation(SET_LOGS);

  const loadMore = () => setLimit((limit) => limit + 50);

  const renderColor = ({ variant, theme }) => {
    if (variant === "WARNING") return theme.palette.warning.main;
    if (variant === "INFO") return theme.palette.info.main;
    if (variant === "ERROR") return theme.palette.error.main;
    return theme.palette.secondary.main;
  };

  function extractTracebacks(logFileString) {
    const tracebackPattern =
      /Traceback \(most recent call last\):\n([\s\S]+?)(?=\n\n|$)/g;
    const tracebacks = [];
    let match;

    while ((match = tracebackPattern.exec(logFileString)) !== null) {
      const traceback = match[1].trim();
      tracebacks.push(traceback);
    }

    return tracebacks;
  }

  function extractLogs(logFileString) {
    const logEntryPattern =
      /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3}) (\w+)\s+([\s\S]*?)(?=\n\d{4}-\d{2}-\d{2}|\n$)/g;
    const logs = [];
    let match;

    while ((match = logEntryPattern.exec(logFileString)) !== null) {
      const [, timestamp, logType, message] = match;
      logs.push({
        timestamp: timestamp.substring(0, timestamp.length - 4),
        logType,
        message,
      });
    }

    return logs;
  }

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
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button
          onClick={() => {
            setLogs();
          }}
          color="inherit"
        >
          Set Logs
        </Button>
      </div>

      {extractLogs(keeper.logs)
        .reverse()
        .slice(0, limit)
        .map((log) => (
          <Typography
            key={`${log.message}${log.timestamp}${log.logType}`}
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
              {moment(new Date(log.timestamp)).format()}
            </span>{" "}
            |{" "}
            <span
              css={(theme) =>
                css`
                  color: ${renderColor({ theme, variant: log.logType })};
                `
              }
            >
              {log.logType}
            </span>{" "}
            | {log.message}
          </Typography>
        ))}
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Button onClick={loadMore} color="inherit">
          Load More
        </Button>
      </div>
    </Paper>
  );
};

export default KeeperLogs;
