/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar, Paper } from "@mui/material";

import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { SEEN } from "../../../data/queries";

const Notification = ({ notification }) => {
  const params = JSON.parse(notification.payload.stringifiedParams);

  return (
    <div
      css={(theme) =>
        css`
          border: 1px solid ${theme.palette.divider};
          padding: 0.5em;
          margin-bottom: 0.5em;
          border-radius: 0.5em;
        `
      }
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Typography variant="body2">
          Context:{" "}
          <span
            css={css`
              font-weight: bold;
            `}
          >
            {notification.payload.context}
          </span>
        </Typography>
        <Typography variant="body2">
          created at:{" "}
          <span
            css={css`
              font-weight: bold;
            `}
          >
            {new Date(Number(notification.createdAt)).toString()}
          </span>
        </Typography>
      </div>
      <Typography variant="subtitle1">
        Notification Name:{" "}
        <span
          css={css`
            font-weight: bold;
          `}
        >
          {notification.payload.name}
        </span>
      </Typography>
      {notification.payload.name === "Status Change" && (
        <div>
          <Typography variant="body1">
            From:{" "}
            <span
              css={css`
                font-weight: bold;
              `}
            >
              {params[0]}
            </span>
          </Typography>
          <Typography variant="body1">
            To:{" "}
            <span
              css={css`
                font-weight: bold;
              `}
            >
              {params[1]}
            </span>
          </Typography>
        </div>
      )}
    </div>
  );
};

const KeeperNotifications = ({ keeper }) => {
  const [seen] = useMutation(SEEN);

  useEffect(() => {
    seen({ variables: { address: keeper.wallet } })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keeper]);

  return (
    <div>
      {keeper.notifications.length > 0 ? (
        keeper.notifications.map((notification) => (
          <Notification notification={notification} key={notification._id} />
        ))
      ) : (
        <Paper
          css={css`
            padding: 2em;
            justify-content: center;
          `}
        >
          No notifications on this keeper yet.
        </Paper>
      )}
    </div>
  );
};

export default KeeperNotifications;
