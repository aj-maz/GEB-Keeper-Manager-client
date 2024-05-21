/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, Tabs, Tab, Badge } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import {
  DashboardLayout,
  KeeperInfo,
  KeeperLogs,
  KeeperTransactions,
  KeeperNotifications,
  KeeperBalances,
} from "../organisms";

import { useState } from "react";

const KeeperDetails = ({ data, loading, error, keeperStatus }) => {
  const [selectedTab, setSelectedTab] = useState("notifications");

  const keeper = !data && !keeperStatus.data ? null : data.keeper;

  const renderProperDetail = () => {
    switch (selectedTab) {
      //case "logs":
      //return <KeeperLogs keeper={keeper} />;
      //case "transactions":
      //  return <KeeperTransactions keeper={keeper} />;
      case "notifications":
        return <KeeperNotifications keeper={keeper} />;
    }
  };

  const status = Number(keeperStatus.data?.keeperStatus);

  return (
    <DashboardLayout>
      {loading || !data ? (
        <Typography variant="h6">Loading ...</Typography>
      ) : (
        <div>
          <KeeperInfo
            keeper={keeper}
            status={status}
            statusRefetch={keeperStatus.refetch}
          />
          <div
            css={css`
              margin-top: 1em;
            `}
          ></div>
          <KeeperBalances
            status={status}
            statusRefetch={keeperStatus.refetch}
            keeper={keeper}
          />
          <div
            css={css`
              margin-top: 1em;
            `}
          ></div>
          <Tabs
            css={(theme) => css`
              margin-bottom: 1em;
              border-bottom: 1px solid ${theme.palette.divider};
            `}
            value={selectedTab}
            textColor="secondary"
            indicatorColor="secondary"
            onChange={(e, v) => setSelectedTab(v)}
          >
            {/*<Tab label="Logs" value="logs" />
            <Tab label="Transactions" value="transactions" />*/}
            <Tab
              label={
                <Badge
                  color="error"
                  size="small"
                  badgeContent={keeper.unseenNotifsCount}
                >
                  <Notifications />
                </Badge>
              }
              value="notifications"
            />
          </Tabs>
          {renderProperDetail()}
        </div>
      )}
    </DashboardLayout>
  );
};

export default KeeperDetails;
