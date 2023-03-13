/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Paper,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
} from "@mui/material";

const NetworksList = ({ selected, networks, onSelect = () => {} }) => {
  const systemsOfNetwork = (network) =>
    network.systems.length > 0
      ? network.systems.map((system) => system.name).join(", ")
      : "No system in the network";

  return (
    <Paper sx={{ width: "100%" }}>
      <List>
        {networks.length > 0 ? (
          networks.map((network) => (
            <ListItem
              key={network.id}
              disablePadding
              sx={{ bgcolor: selected === network.id ? "action.hover" : "" }}
              onClick={() => onSelect(network.id)}
            >
              <ListItemButton>
                <ListItemText
                  primary={network.name}
                  secondary={systemsOfNetwork(network)}
                />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No network exists!" />
          </ListItem>
        )}
      </List>
    </Paper>
  );
};

export default NetworksList;
