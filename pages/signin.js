/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_TOKEN, GET_NONCE } from "../data/queries";
import useClient from "../data/client";

const SigninPage = () => {
  const router = useRouter();
  const client = useClient();

  const [getNonce] = useMutation(GET_NONCE);
  const [getToken] = useMutation(GET_TOKEN);

  useEffect(() => {
    if (localStorage.getItem("keeper-manager-token") !== "") {
      router.push("/");
    }
  }, []);

  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Paper
        css={css`
          min-width: 300px;
          padding: 2em;
          text-align: center;
        `}
      >
        <Typography variant="h6">Keeper Manager</Typography>
        <Button
          css={css`
            margin-top: 1em;
          `}
          variant="contained"
          color="secondary"
          onClick={async () => {
            try {
              const accounts = await ethereum.request({
                method: "eth_requestAccounts",
              });

              const nonceResponse = await getNonce({
                variables: {
                  address: accounts[0],
                },
              });

              const nonce = nonceResponse.data.getNonce;

              const signature = await ethereum.request({
                method: "personal_sign",
                params: [
                  `Signin to Keeper Manager Dashboard with nonce: ${nonce}`,
                  accounts[0],
                ],
              });

              const token = (
                await getToken({
                  variables: {
                    address: accounts[0],
                    signature,
                  },
                })
              ).data.getToken;

              localStorage.setItem("keeper-manager-token", token);
              router.replace("/").then(() => router.reload());
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Sign in
        </Button>
      </Paper>
    </div>
  );
};
export default SigninPage;
