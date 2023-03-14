/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useRouter } from "next/router";

import { WalletRow } from "../../molecules";

const KeepersTable = ({ keepers }) => {
  const router = useRouter();
  console.log(keepers);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Network</TableCell>
            <TableCell align="center">System</TableCell>
            <TableCell align="center">Wallet</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keepers.map((keeper) => (
            <TableRow
              key={keeper._id}
              css={css`
                cursor: pointer;
              `}
              onClick={() => router.push(`/keepers/details/${keeper._id}`)}
            >
              <TableCell>{keeper.name}</TableCell>
              <TableCell align="center">{keeper.network}</TableCell>
              <TableCell align="center">{keeper.system}</TableCell>
              <TableCell align="center">{keeper.wallet}</TableCell>
              <TableCell align="right">{keeper.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KeepersTable;
