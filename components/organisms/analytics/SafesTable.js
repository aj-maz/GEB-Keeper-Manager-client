/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Checkbox, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const SafesTable = ({ data, loading, error }) => {
  const [onlyDebtful, setOnlyDebtful] = useState(true);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 220,
      valueGetter: (params) => Number(params.row.id),
    },
    {
      field: "debt",
      headerName: "Debt ( RAI )",
      width: 220,
      valueGetter: (params) => {
        return Number(Number(params.row.debt).toFixed(2));
      },
    },
    {
      field: "liquidationPrice",
      headerName: "Liquidation Price is $USD",
      width: 250,
      valueGetter: (params) => {
        return Number(Number(params.row.liquidationPrice).toFixed(2));
      },
    },
  ];

  if (data) {
    console.log([...data.raiSafes]);
  }

  return (
    <div
      css={css`
        margin-bottom: 20px;
      `}
    >
      <div
        css={css`
          padding: 1em;
          display: flex;
          align-items: center;
        `}
      >
        <Checkbox
          checked={onlyDebtful}
          onChange={(e) => setOnlyDebtful((odf) => !odf)}
          color="secondary"
        />
        <Typography
          css={css`
            margin-left: 0.5em;
          `}
          variant="body1"
        >
          Just Debtful Safes
        </Typography>
      </div>
      {data ? (
        <Paper>
          <DataGrid
            rows={[...data.raiSafes]
              .filter((safe) => (onlyDebtful ? Number(safe.debt) > 0 : true))
              .sort((a, b) => Number(a.id) - Number(b.id))}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20, 40]}
          />
        </Paper>
      ) : null}
    </div>
  );
};
export default SafesTable;
