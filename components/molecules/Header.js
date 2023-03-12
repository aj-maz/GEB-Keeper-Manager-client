import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = ({ drawerWidth, handleDrawerToggle }) => {
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
        <Typography variant="h6" noWrap component="div">
          GEB Keeper Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
