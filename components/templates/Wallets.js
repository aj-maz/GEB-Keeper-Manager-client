/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { DashboardLayout, WalletsTable } from "../organisms";

const Wallets = () => {
  return (
    <DashboardLayout>
      <WalletsTable />
    </DashboardLayout>
  );
};

export default Wallets;
