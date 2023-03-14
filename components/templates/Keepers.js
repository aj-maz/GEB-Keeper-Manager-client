/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { DashboardLayout, KeepersTable } from "../organisms";
import { useRouter } from "next/router";

const Keepers = () => {
  const router = useRouter();

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
      <KeepersTable />
    </DashboardLayout>
  );
};

export default Keepers;
