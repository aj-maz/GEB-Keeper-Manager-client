/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import { DashboardLayout, NetworksList, NetworkInfo } from "../organisms";

const Networks = () => {
  const networks = [
    {
      id: 0,
      rpc_uri: "https://goerli.infura.io/v3/7a3ae98793214e75b0686d31b7fa2c56",
      name: "Mainnet",
      systems: [],
    },
    {
      id: 1,
      rpc_uri: "https://goerli.infura.io/v3/7a3ae98793214e75b0686d31b7fa2c56",
      name: "Goerli",
      systems: [
        {
          name: "Tai",
          graph_endpoint:
            "https://subgraph-goerli.tai.money/subgraphs/name/tai",
          contracts: {
            ETH_FROM: "0xe75b8a5ba47ca7458cbc4db1dd52df5e2ebc42cf",
            STARTING_BLOCK_NUMBER: 8125447,
            GEB_MULTISIG: "0x336281cb29d22914242edfc4467e1f458fb378c7",
            SURPLUS_AUCTION_RECEIVER:
              "0x0000000000000000000000000000000000000001",
          },
        },
        {
          name: "Rai",
          graph_endpoint:
            "https://subgraph-goerli.tai.money/subgraphs/name/tai",
          contracts: {
            ETH_FROM: "0xe75b8a5ba47ca7458cbc4db1dd52df5e2ebc42cf",
            STARTING_BLOCK_NUMBER: 8125447,
            GEB_MULTISIG: "0x336281cb29d22914242edfc4467e1f458fb378c7",
            SURPLUS_AUCTION_RECEIVER:
              "0x0000000000000000000000000000000000000001",
          },
        },
      ],
    },
    {
      id: 2,
      rpc_uri: "https://goerli.infura.io/v3/7a3ae98793214e75b0686d31b7fa2c56",
      name: "Optimism",
      systems: [
        {
          name: "Hai",
          graph_endpoint:
            "https://subgraph-goerli.tai.money/subgraphs/name/tai",
          contracts: {
            ETH_FROM: "0xe75b8a5ba47ca7458cbc4db1dd52df5e2ebc42cf",
            STARTING_BLOCK_NUMBER: 8125447,
            GEB_MULTISIG: "0x336281cb29d22914242edfc4467e1f458fb378c7",
            SURPLUS_AUCTION_RECEIVER:
              "0x0000000000000000000000000000000000000001",
          },
        },
      ],
    },
  ];

  const loading = false;

  const selected = 1;

  return (
    <DashboardLayout>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <NetworksList
            networks={networks}
            loading={loading}
            selected={selected}
          />
        </Grid>
        <Grid item md={6}>
          <NetworkInfo network={networks[selected]} />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Networks;
