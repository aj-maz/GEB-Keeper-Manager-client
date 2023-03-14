import { Grid, Typography } from "@mui/material";
import { DashboardLayout, NetworksList, NetworkInfo } from "../organisms";
import { useState } from "react";

const Networks = ({ data, loading }) => {
  const [selected, setSelected] = useState(null);

  const networks = !data ? [] : data.networks;

  const selectedNetwork =
    networks && selected !== null
      ? networks.find((network) => network.id === selected)
      : null;

  return (
    <DashboardLayout>
      {loading ? (
        <Typography variant="h6">Loading ...</Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item md={4}>
            <NetworksList
              networks={networks}
              loading={loading}
              selected={selected}
              onSelect={(id) => {
                setSelected(id);
              }}
            />
          </Grid>
          <Grid item md={8}>
            {selectedNetwork && <NetworkInfo network={selectedNetwork} />}
          </Grid>
        </Grid>
      )}
    </DashboardLayout>
  );
};

export default Networks;
