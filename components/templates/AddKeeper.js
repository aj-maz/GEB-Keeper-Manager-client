/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { DashboardLayout, CreateKeeperSteps } from "../organisms";

const Keepers = ({ data, loading, error, startKeeper }) => {
  const systems = data && data.systems ? data.systems : [];

  return (
    <DashboardLayout>
      {loading && !data ? (
        <Typography variant="h6">Loading ...</Typography>
      ) : (
        <CreateKeeperSteps systems={systems} />
      )}
    </DashboardLayout>
  );
};

export default Keepers;
