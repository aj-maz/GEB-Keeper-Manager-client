import { Chip, TableCell } from "@mui/material";

import { PointerRow } from "../../atoms";

const WalletRow = () => {
  return (
    <>
      <PointerRow>
        <TableCell sx={{ border: 0 }} component="th" scope="row">
          0x4A87a2A017Be7feA0F37f03F3379d43665486Ff8
        </TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="right"></TableCell>
      </PointerRow>
      <PointerRow>
        <TableCell sx={{ border: 0 }} component="th" scope="row"></TableCell>
        <TableCell align="center">Rai-Mainnet</TableCell>
        <TableCell align="right">
          <Chip color="secondary" label="Ready" />
        </TableCell>
      </PointerRow>
      <PointerRow>
        <TableCell component="th" scope="row"></TableCell>
        <TableCell align="center">Tai-Testnet</TableCell>
        <TableCell align="right">
          <Chip color="secondary" label="Ready" />
        </TableCell>
      </PointerRow>
    </>
  );
};

export default WalletRow;
