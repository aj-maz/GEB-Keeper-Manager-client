/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/router";

const KeepersTable = ({ keepers }) => {
  const router = useRouter();
  console.log(keepers);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Wallet</TableCell>
            <TableCell align="center">Network</TableCell>
            <TableCell align="center">System</TableCell>
            <TableCell align="center">Collateral</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keepers.map((keeper) => (
            <>
              <TableRow
                key={keeper._id}
                css={css`
                  cursor: pointer;
                `}
                onClick={() => router.push(`/keepers/details/${keeper._id}`)}
              >
                <TableCell>{keeper.wallet}</TableCell>
                <TableCell align="center">{keeper.network}</TableCell>
                <TableCell align="center">{keeper.system}</TableCell>
                <TableCell align="center">{keeper.collateral}</TableCell>
                <TableCell align="right">{keeper.status}</TableCell>
              </TableRow>
              <TableRow
                key={`${keeper._id}2`}
                css={css`
                  cursor: pointer;
                `}
                onClick={() => router.push(`/keepers/details/${keeper._id}`)}
              >
                <TableCell colSpan={5} align="left">
                  Options:{" "}
                  {keeper.options.map((option) => (
                    <Chip
                      css={css`
                        margin-left: 0.5em;
                      `}
                      key={option}
                      label={option}
                    />
                  ))}
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KeepersTable;
