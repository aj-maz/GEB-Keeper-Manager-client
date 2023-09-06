/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ListItem, ListItemText, List, Paper, Typography } from "@mui/material";

const UsersList = ({ data }) => {
  const { users } = data;

  return (
    <Paper>
      <Typography
        css={css`
          padding: 1em;
          padding-bottom: 0em;
        `}
        variant="h6"
      >
        Users:
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360 }} aria-label="contacts">
        {users.map((user) => (
          <ListItem key={user._id}>
            <ListItemText primary={user.address} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
export default UsersList;
