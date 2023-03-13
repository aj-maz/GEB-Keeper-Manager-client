/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Chip, TableCell, TableRow, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import { PointerRow } from "../../atoms";

const WalletRow = ({ wallet }) => {
  return (
    <>
      <TableRow>
        <TableCell sx={{ border: 0 }} component="th" scope="row">
          {wallet.address}
        </TableCell>
        <TableCell align="center">
          <div>
            <IconButton size="small">
              <Edit />
            </IconButton>
            <IconButton
              css={css`
                margin-left: 0.25em;
              `}
              size="small"
            >
              <Delete />
            </IconButton>
          </div>
        </TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
      <PointerRow>
        <TableCell sx={{ border: 0 }} component="th" scope="row"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center">Rai-Mainnet</TableCell>
        <TableCell align="right">
          <Chip color="secondary" label="Ready" />
        </TableCell>
      </PointerRow>
      <PointerRow>
        <TableCell component="th" scope="row"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center">Tai-Testnet</TableCell>
        <TableCell align="right">
          <Chip color="secondary" label="Ready" />
        </TableCell>
      </PointerRow>
    </>
  );
};

export default WalletRow;
