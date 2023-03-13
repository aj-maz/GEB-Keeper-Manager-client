/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

const InfoRow = ({ label, value }) => {
  return (
    <Typography variant="body2">
      {label}:{" "}
      <span
        css={(theme) =>
          css`
            color: ${theme.palette.secondary.main};
            font-weight: bold;
          `
        }
      >
        {value}
      </span>
    </Typography>
  );
};

export default InfoRow;
