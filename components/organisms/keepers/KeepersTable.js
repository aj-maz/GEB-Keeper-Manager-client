/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Fragment } from "react";
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Badge,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
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
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keepers.map((keeper) => (
            <Fragment key={keeper._id}>
              <TableRow
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
                <TableCell align="right">
                  {" "}
                  <Badge
                    color="info"
                    size="small"
                    badgeContent={keeper.unseenNotifsCount}
                  >
                    <Notifications />
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow
                css={css`
                  cursor: pointer;
                `}
                onClick={() => router.push(`/keepers/details/${keeper._id}`)}
              >
                <TableCell colSpan={6} align="left">
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
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KeepersTable;
