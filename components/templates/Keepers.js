/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { DashboardLayout, KeepersTable } from "../organisms";
import { useRouter } from "next/router";

const Keepers = ({ data, loading }) => {
  const router = useRouter();

  const keepers = !data ? [] : data.keepers;

  return (
    <DashboardLayout>
      <div
        css={css`
          margin-bottom: 1em;
          display: flex;
          flex-direction: row-reverse;
        `}
      >
        <Button
          onClick={() => {
            router.push("/keepers/add");
          }}
          color="primary"
          variant="contained"
        >
          Add new keeper
        </Button>
      </div>
      {loading ? (
        <Typography variant="h6">Loading ...</Typography>
      ) : (
        <KeepersTable keepers={keepers} />
      )}
    </DashboardLayout>
  );
};

export default Keepers;
