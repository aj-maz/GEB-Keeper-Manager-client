/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { DashboardLayout, UsersForm, UsersList } from "../organisms";

import { gql, useQuery } from "@apollo/client";
import { GET_USERS } from "../../data/queries";

const Users = () => {
  const { data, loading, error, refetch } = useQuery(GET_USERS);

  console.log(data);

  if (loading || error) return <div>Loading ...</div>;

  return (
    <DashboardLayout>
      <UsersForm refetch={refetch} />
      <div
        css={css`
          margin-top: 1em;
        `}
      ></div>
      <UsersList data={data} loading={loading} error={error} />
    </DashboardLayout>
  );
};
export default Users;
