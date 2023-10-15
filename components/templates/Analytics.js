/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import { Header } from "../molecules";
import { SafesTable, RaiNeedsFinder, DashboardLayout } from "../organisms";

const Analytics = ({ data, loading, error }) => {
  return (
    <DashboardLayout>
      <div
        css={css`
          margin-top: 100px;
          display: flex;
          justify-content: center;
        `}
      >
        <RaiNeedsFinder data={data} loading={loading} error={error} />
      </div>
      <div
        css={css`
          margin-top: 0px;
          width: 100%;
          display: flex;
          justify-content: center;
        `}
      >
        <SafesTable data={data} loading={loading} error={error} />
      </div>
    </DashboardLayout>
  );
};
export default Analytics;
