/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const NetworksList = ({ selected, networks, loading, onSelect = () => {} }) => {
  const systemsOfNetwork = (network) =>
    network.systems.length > 0
      ? network.systems.map((system) => system.name).join(", ")
      : "No system in the network";

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
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
    </Box>
  );
};

export default NetworksList;
