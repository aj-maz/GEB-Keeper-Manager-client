/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar, Paper } from "@mui/material";

const Transaction = ({ transaction }) => {
  console.log(transaction);
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
      <Typography variant="body1">
        Transaction Type:{" "}
        <span
          css={css`
            font-weight: bold;
          `}
        >
          {transaction.directEvents[0]?.decoded.name}
        </span>
      </Typography>
      <Typography variant="body2">
        Transaction Hash:{" "}
        <span
          css={css`
            font-weight: bold;
          `}
        >
          {transaction.hash}
        </span>
      </Typography>
      <Typography variant="subtitle1">Params:</Typography>
      {transaction.directEvents[0]?.decoded.params.map((param) => (
        <div key={param.name}>
          <Typography variant="caption">
            {param.name}: {param.value}
          </Typography>
        </div>
      ))}
    </div>
  );
};

const KeeperTransactions = ({ keeper }) => {
  const transactionsSorted = [...keeper.transactions].sort(
    (a, b) =>
      -1 * (new Date(a.data.block_signed_at) - new Date(b.data.block_signed_at))
  );

  return (
    <div>
      {transactionsSorted.length > 0 ? (
        transactionsSorted.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.hash} />
        ))
      ) : (
        <Paper
          css={css`
            padding: 2em;
            justify-content: center;
          `}
        >
          No transaction on this keeper yet.
        </Paper>
      )}
    </div>
  );
};

export default KeeperTransactions;
