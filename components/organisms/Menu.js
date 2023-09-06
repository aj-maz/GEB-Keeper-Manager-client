import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, Person } from "@mui/icons-material";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  const menu = [
    {
      title: "Home",
      Icon: Home,
      route: "/",
    },
    { title: "Users", Icon: Person, route: "/users" },
    // { title: "Networks", Icon: Podcasts, route: "/networks" },
    // { title: "Keepers", Icon: PrecisionManufacturing, route: "/keepers" },
    // { title: "Users", Icon: PeopleAlt, route: "/users" },
  ];

  return (
    <List>
      {menu.map(({ title, Icon, route }, index) => (
        <ListItem onClick={() => router.push(route)} key={title} disablePadding>
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
