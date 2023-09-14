/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu, Logout } from "@mui/icons-material";

const Header = ({ drawerWidth, handleDrawerToggle, logout, noLogin }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          `}
        >
          <Typography variant="h6" noWrap component="div">
            GEB Keeper Manager
          </Typography>
          {!noLogin ? (
            <IconButton onClick={logout}>
              <Logout />
            </IconButton>
          ) : null}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
