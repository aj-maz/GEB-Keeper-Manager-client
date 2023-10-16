/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import { Paper, Typography, Button } from "@mui/material";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

import Menu from "./Menu";
import { Header, Navbar } from "../molecules";

function DashboardLayout({ window, children }) {
  const client = useApolloClient();

  const router = useRouter();
  const drawerWidth = 240;

  useEffect(() => {
    if (localStorage.getItem("keeper-manager-token") == "") {
      router.push("/signin");
    }
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    localStorage.setItem("keeper-manager-token", "");
    client.resetStore();
    router.push("/signin");
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Menu />
      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        logout={logout}
      />
      <Navbar
        drawerWidth={drawerWidth}
        window={window}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawer={drawer}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
