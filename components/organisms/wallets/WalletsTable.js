import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { WalletRow } from "../../molecules";

const WalletsTable = ({ wallets }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="center">Actions</TableCell>
            {/* <TableCell align="center">Network</TableCell>
            <TableCell align="right">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {wallets.map((wallet) => (
            <WalletRow key={wallet.address} wallet={wallet} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WalletsTable;
