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

import { useMutation } from "@apollo/client";

import { GET_TOKEN, GET_NONCE } from "../../data/queries";

import Menu from "./Menu";
import { Header, Navbar } from "../molecules";

function DashboardLayout({ window, children }) {
  const drawerWidth = 240;

  const [authenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("keeper-manager-token") !== "");
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [getNonce, { client }] = useMutation(GET_NONCE);
  const [getToken] = useMutation(GET_TOKEN);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    localStorage.setItem("keeper-manager-token", "");
    client.cache.reset();
    setIsAuthenticated(false);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Menu />
      <Divider />
    </div>
  );

  if (!authenticated) {
    return (
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Paper
          css={css`
            min-width: 300px;
            padding: 2em;
            text-align: center;
          `}
        >
          <Typography variant="h6">Keeper Manager</Typography>
          <Button
            css={css`
              margin-top: 1em;
            `}
            variant="contained"
            color="secondary"
            onClick={async () => {
              try {
                const accounts = await ethereum.request({
                  method: "eth_requestAccounts",
                });

                const nonceResponse = await getNonce({
                  variables: {
                    address: accounts[0],
                  },
                });

                const nonce = nonceResponse.data.getNonce;

                const signature = await ethereum.request({
                  method: "personal_sign",
                  params: [
                    `Signin to Keeper Manager Dashboard with nonce: ${nonce}`,
                    accounts[0],
                  ],
                });

                const token = (
                  await getToken({
                    variables: {
                      address: accounts[0],
                      signature,
                    },
                  })
                ).data.getToken;

                localStorage.setItem("keeper-manager-token", token);
                // refetch();
                client.cache.reset();
                setIsAuthenticated(true);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Sign in
          </Button>
        </Paper>
      </div>
    );
  }

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
