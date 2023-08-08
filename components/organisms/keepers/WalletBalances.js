/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {ButtonBase, Typography, Avatar, IconButton} from "@mui/material";
import { Refresh } from '@mui/icons-material'
const WalletBalances = ({walletBalances, system, refreshWalletBalances}) => {
    console.log(walletBalances, system)

    return <div>
        <div css={css`display: flex; justify-content: space-between; margin-bottom: 1em; align-items: center`}>
            <div css={css`display: flex; align-items: center`}>
                <Typography variant="body1">Keeper Address: {walletBalances.walletObject?.address}</Typography>
                <IconButton onClick={() => refreshWalletBalances()} css={css`margin-left: 0.5em`} size="small">
                    <Refresh />
                </IconButton>
            </div>
            <Typography variant="body2">Keeper Network: {system.network}</Typography>
        </div>
        <div>
            {walletBalances.loading ? <Typography variant="body1">Loading Balances ...</Typography> :
                <div>
                    <div css={css`margin-bottom: 0.5em;`}>
                        <Typography variant="body1">
                            Native Coin Balance of Keeper: {Number(walletBalances.nativeBalance)}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body1">
                            System Coin Balance of Wallet: {Number(walletBalances.systemCoinBalance)}
                        </Typography>
                        <Typography variant="body2">System Coin Address: {walletBalances.systemCoinAddress}</Typography>
                        <Typography variant="body2">System Coin Name: {walletBalances.systemCoinName}</Typography>
                        <Typography variant="body2">System Coin Symbol: {walletBalances.systemCoinSymbol}</Typography>
                    </div>
                </div>
            }
        </div>
        <Typography variant="body2" css={theme => css`margin-top: 2em; margin-bottom: 1em; color: ${theme.palette.warning.light}`}> Keeper needs Native coin to be able to do its transactions and needs System Coin to be able to participate in auctions.</Typography>
    </div>;
};

export default WalletBalances;
