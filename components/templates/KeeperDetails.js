/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { DashboardLayout, KeeperInfo } from "../organisms";

const KeeperDetails = ({ data, loading }) => {
  const keeper = !data ? null : data.keeper;

  return (
    <DashboardLayout>
      {loading ? (
        <Typography variant="h6">Loading ...</Typography>
      ) : (
        <div>
          <KeeperInfo keeper={keeper} />
        </div>
      )}
    </DashboardLayout>
  );
};

export default KeeperDetails;
