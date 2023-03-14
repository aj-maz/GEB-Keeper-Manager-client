/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { DashboardLayout, AddKeeperForm } from "../organisms";

const Keepers = () => {
  return (
    <DashboardLayout>
      <AddKeeperForm />
    </DashboardLayout>
  );
};

export default Keepers;
