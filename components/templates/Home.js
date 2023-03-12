/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { DashboardLayout } from "../organisms";

const Home = () => {
  return (
    <DashboardLayout>
      <Typography variant="h5">This is the starting point</Typography>
    </DashboardLayout>
  );
};

export default Home;
