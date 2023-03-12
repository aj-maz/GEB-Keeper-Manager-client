import { TableRow } from "@mui/material";

const PointerRow = ({ children }) => {
  return <TableRow sx={{ cursor: "pointer" }}>{children}</TableRow>;
};

export default PointerRow;
