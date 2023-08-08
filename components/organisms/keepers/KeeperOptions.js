/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Checkbox, Typography} from "@mui/material";


const optionsList = [
    {label: "Bid Only", value: 'bid-only', default : false},
    {label: "Start Auction Only", value: 'start-auction-only', default: false},
    {label: "Keep system coin in SAFEEngine on exit", value: 'keep-system-coin-in-safe-engine-on-exit', default: false},
    {label: "Keep collateral in SAFEEngine on exit", value: 'keep-collateral-in-safe-engine-on-exit', default: false},
    {label: "Swap Collateral After Auction", value: 'swap-collateral', default: true},
    {label: "Flash Swap", value: 'flash-swap', default: false},
]

const KeeperOptions = ({options, handleKeeperOptions}) => {
    return <div>
        {optionsList.map(option =>  (<div key={option.value} css={css`display: flex; align-items: center`}>
                <Checkbox checked={(new Set(options)).has(option.value)} onClick={() => handleKeeperOptions(option.value)} color="secondary" css={css`margin-right: 0.5em`} /><Typography variant="body1">{option.label}</Typography>
            </div>
        ))}

    </div>;
};

export default KeeperOptions;
