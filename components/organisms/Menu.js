import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  Wallet,
  PrecisionManufacturing,
  Podcasts,
} from "@mui/icons-material";

const Menu = () => {
  const menu = [
    {
      title: "Home",
      Icon: Home,
      route: "/home",
    },
    { title: "Wallets", Icon: Wallet, route: "/wallet" },
    { title: "Networks", Icon: Podcasts, route: "/networks" },
    { title: "Keepers", Icon: PrecisionManufacturing, route: "/keepers" },
  ];

  return (
    <List>
      {menu.map(({ title, Icon, route }, index) => (
        <ListItem key={title} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;
